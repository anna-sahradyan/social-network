import React from 'react';
import { Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import AddPost from "./components/addPost/AddPost";
import FullPost from "./pages/fullPost/FullPost";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
const App = () => {
    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/register"} element={<Register/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/addPost"} element={<AddPost/>}/>
                <Route path={"/posts/:id"} element={<FullPost/>}/>
                <Route path={"/profile/:username"} element={<Profile/>}/>
                {/*<Route path="/register" element =*/}
                {/*    {user ? <Navigate replace to= "/" /> : <Register />}/>*/}
            </Routes>
        </>
    );
};

export default App;