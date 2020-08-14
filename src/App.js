import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
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
                        <Route path="/received">
                            <ReceivedList/>
                        </Route>
                        <Route path="/">
                            <BoughtItems/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
