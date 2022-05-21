
  
import {Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import CommunityLoginPage from "../pages/community-login";
import CommunitySignUpPage from "../pages/community-signup";
import CommunityDashboard from "../pages/community-dashboard";
import ErrorPage from "../pages/error";

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/community/login" element={<CommunityLoginPage/>}/>
            <Route path="/community/signup" element={<CommunitySignUpPage/>}/>
            <Route path="/community/dashboard" element={<CommunityDashboard/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    );
}

export default Router;