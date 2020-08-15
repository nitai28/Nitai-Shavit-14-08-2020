import React from 'react';
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

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route exact component={ReceivedList} path="/received"/>
                        <Route exact component={BoughtItems} path="/list"/>
                        <Route exact path="/">
                            <Redirect exact from="/" to="list" />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
