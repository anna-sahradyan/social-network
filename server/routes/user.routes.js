import express from "express";
import {signUp, signIn, getMe} from "../controllers/userController.js";
import checkAuth from "../utils/checkAuth.js";
import {loginValidator, registerValidator} from "../validations/index.js";
import handleValidationErrors from "../utils/handleValidationErrors.js";

const router = express.Router();
router.post(`/signup`,loginValidator,handleValidationErrors, signUp);
router.post(`/signin`,registerValidator,handleValidationErrors, signIn);
router.get(`/me`, checkAuth, getMe);

export default router;