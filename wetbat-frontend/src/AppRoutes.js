import React from "react";
import {
    Routes,
    Route,
  } from "react-router-dom";


import AdminTemplate from "./templates/admin";  
import DashboardPage from "./pages/Dashboard";
import QuotePage from "./pages/Quote";

const AppRoutes = () =>{
    return (
        <Routes>
            <Route path="/" element={<AdminTemplate page={DashboardPage}/>} />
            <Route path="/quote/:id" element={<AdminTemplate page={QuotePage} />} />
        </Routes>
    );

}

export default AppRoutes