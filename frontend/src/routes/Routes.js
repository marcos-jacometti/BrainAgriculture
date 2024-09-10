import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/dashboard";
import FarmersPage from "../pages/farmers";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <DashboardPage /> } />
                <Route path="/farmer" element={ <FarmersPage /> } />
            </Routes>
        </Router>
    )
}

export default AppRoutes;