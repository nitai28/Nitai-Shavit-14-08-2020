import React, {useEffect} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ReceivedList from "./routes/ReceivedList";
import BoughtItems from "./routes/BoughtItems";
import {connect} from "react-redux";
import {calculateCurrentUsd, clearError} from "./store/actions/boughtAction";
import {message} from 'antd';

const App = ({calculateCurrentUsd, apiError, clearError}) => {

    useEffect(() => {
        calculateCurrentUsd();
        const interval = setInterval(() => calculateCurrentUsd(), 10000);
        return () => {
            clearInterval(interval)
        }
    }, [calculateCurrentUsd]);

    useEffect(() => {
        if (apiError) {
            message.error({
                    content: apiError,
                    className: 'custom-class',
                    style: {
                        marginTop: '10vh',
                        fontSize: "18px"
                    },
                },
                6,
            );
            clearError();
        }
    }, [apiError, clearError]);

    return (
        <div className="App">
            <Router>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route exact component={ReceivedList} path="/received"/>
                        <Route exact component={BoughtItems} path="/list"/>
                        <Route path="/">
                            <Redirect from="/" to="list"/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        apiError: state.bought.apiError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        calculateCurrentUsd: () => dispatch(calculateCurrentUsd()),
        clearError: () => dispatch(clearError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
