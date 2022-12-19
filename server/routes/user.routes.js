import express from "express";
import {signUp, signIn, getMe} from "../controllers/user.controllers.js";
import checkAuth from "../utils/checkAuth.js";

const router = express.Router();
router.post(`/signup`, signUp);
router.post(`/signin`, signIn);
router.get(`/me`, checkAuth, getMe);

export default router;