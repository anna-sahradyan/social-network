import jwt from "jsonwebtoken";
import {registerValidator} from "../validations/auth.js";
import {validationResult} from "express-validator";
import User from "../models/User.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array());
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const doc = new User({
            email: req.body.email,
            fullName: req.body.fullName,
            avatarUrl: req.body.avatarUrl,
            passwordHash:hash,
        });
        const user = await doc.save();
        const token = jwt.sign({
                _id: user._id,

            },
            process.env.PASS_SEC,

            {
                expiresIn: "30d"
            },
        );
        const {passwordHash, ...userData} = user._doc;
        res.json({
            ...userData,
            token
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "dont work"
        });
    }


}
