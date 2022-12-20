import express from "express";
import {create,getAll} from "../controllers/postController.js";
import {postCreateValidator} from "../validations/index.js";
import checkAuth from "../utils/checkAuth.js";

const router = express.Router();
router.get(`/`,getAll);
// router.get(`/:id`,getOne);
router.post(`/`,checkAuth, postCreateValidator,create);
// router.delete(`/`,remove);
// router.patch(`/`,update);




export default router;