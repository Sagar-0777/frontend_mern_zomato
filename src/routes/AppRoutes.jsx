import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserRegister from '../pages/auth/UserRegister';
import ChooseRegister from '../pages/auth/ChooseRegister';
import ChooseLogin from '../pages/auth/ChooseLogin';
import UserLogin from '../pages/auth/UserLogin';
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister';
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin';
import Home from '../pages/general/Home';
import Saved from '../pages/general/Saved';
import BottomNav from '../components/BottomNav';
import CreateFood from '../pages/food-partner/CreateFood';
import Profile from '../pages/food-partner/Profile';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Landing page - Login options */}
                <Route path="/" element={<ChooseLogin />} />

                {/* User auth routes */}
                <Route path="/user/login" element={<UserLogin />} />
                <Route path="/user/register" element={<UserRegister />} />

                {/* Food partner auth routes */}
                <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
                <Route path="/food-partner/register" element={<FoodPartnerRegister />} />

                {/* Registration options */}
                <Route path="/register" element={<ChooseRegister />} />

                {/* User routes */}
                <Route path="/home" element={<><Home /><BottomNav /></>} />
                <Route path="/saved" element={<><Saved /><BottomNav /></>} />

                {/* Food partner routes */}
                <Route path="/create-food" element={<CreateFood />} />
                <Route path="/food-partner/:id" element={<Profile />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes