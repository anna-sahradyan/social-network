import express from "express";
import {create, getAll, getLastTags, getOne, remove, update,getComments} from "../controllers/postController.js";
import {postCreateValidator} from "../validations/index.js";
import checkAuth from "../utils/checkAuth.js";
import handleValidationErrors from "../validations/handleValidationErrors.js";


const router = express.Router();
router.get(`/tags`,getLastTags);
router.get(`/comments`,getComments);
router.get(`/`, getAll);
router.get(`/:id`, getOne);
router.post(`/`,  checkAuth,postCreateValidator,handleValidationErrors, create);
router.delete(`/:id`, checkAuth, remove);
router.patch(`/:id`, checkAuth,postCreateValidator,handleValidationErrors, update);



export default router;