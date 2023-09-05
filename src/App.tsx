import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import MainLayout from "./components/MainLayout";
import "./App.less";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/" element={<HomePage/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
