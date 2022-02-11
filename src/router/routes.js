import React from 'react';

//router
import {
    Routes,
    Route,
    BrowserRouter as Router
} from "react-router-dom";
import RegisterPage from '../pages/register';
import LoginPage from '../pages/login';
import TodoPage from '../pages/todo';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<RegisterPage />} />
                <Route path="/todo" element={<TodoPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;