import React from 'react'
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './utils/ProtectedRoute';
import Landingpage from './views/Landingpage'
// import SideBar from './components/common/SideBar'
import Homepage from './views/Homepage'

import NavBar from './components/common/NavBar'
import LayoutRouting from './LayoutRouting';


const AppRoute = () => {
    return (
        <div>

            <Routes>

                <Route element={<ProtectedRoute />}>
                    <Route path='/mktakent/*' element={<LayoutRouting />} />

                    
                </Route>

                <Route element={<><NavBar /><Landingpage /></>} path='/' />

                {/* <Route element={<SideBar><Homepage />  </SideBar>} path='/home' /> */}
                <Route path='/login' element={<div>Login</div>} />
                <Route path='/signup' element={<div>Signup</div>} />






                <Route path="*" element={<h1>Page is not found</h1>} />

            </Routes>
        </div>
    )
}


export default AppRoute