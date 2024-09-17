//week2/project/ecommerce/src/App.jsx
import * as React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import {AppRoutes} from "./Routes.jsx";


function App() {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
}

export default App
