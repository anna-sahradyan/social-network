import express from "express";
import {create, getAll, getOne, remove} from "../controllers/postController.js";
import {postCreateValidator} from "../validations/index.js";
import checkAuth from "../utils/checkAuth.js";

const router = express.Router();
router.get(`/`, getAll);
router.post(`/`,checkAuth, postCreateValidator,  create);
router.get(`/:id`, getOne);
router.delete(`/:id`,checkAuth, remove);
// router.patch(`/`,update);


export default router;