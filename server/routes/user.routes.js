import express from "express";
import {signUp, signIn, getMe} from "../controllers/userController.js";
import {loginValidator, registerValidator} from "../validations/index.js";
import handleValidationErrors from "../validations/handleValidationErrors.js";
import checkAuth from "../utils/checkAuth.js";


const router = express.Router();
router.post(`/signup`, registerValidator,handleValidationErrors, signUp);
router.post(`/signin`,loginValidator,handleValidationErrors, signIn);
router.get(`/me`, checkAuth, getMe);

export default router;