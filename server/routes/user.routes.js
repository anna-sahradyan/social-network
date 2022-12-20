import express from "express";
import {signUp, signIn, getMe} from "../controllers/userController.js";
import checkAuth from "../utils/checkAuth.js";
import {registerValidator} from "../validations/index.js";

const router = express.Router();
router.post(`/signup`, signUp);
router.post(`/signin`,registerValidator, signIn);
router.get(`/me`, checkAuth, getMe);

export default router;