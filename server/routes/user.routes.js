import express from "express";
import {signUp, signIn, getMe} from "../controllers/userController.js";
import checkAuth from "../utils/checkAuth.js";
import {loginValidator, registerValidator} from "../validations/index.js";

const router = express.Router();
router.post(`/signup`,loginValidator, signUp);
router.post(`/signin`,registerValidator, signIn);
router.get(`/me`, checkAuth, getMe);

export default router;