import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcrypt";
//!SIGNUP REGISTER
export const signUp = async (req, res) => {
    try {

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const doc = new User({
            email: req.body.email,
            fullName: req.body.fullName,
            avatarUrl: req.body.avatarUrl,
            passwordHash: hash,
        });
        const user = await doc.save();
        const token = jwt.sign({
                _id: user._id,

            },"secret"
           ,

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
//!SIGNIN LOGIN
export const signIn = async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        })
        if (!user) {
            return req.status(404).json({
                message: "incorrect login or password"
            });

        }
        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);
        if (!isValidPass) {
            return res.status(400).json({
                message: "incorrect login or password"
            })
        }
        const token = jwt.sign({
                _id: user._id,

            },
            "secret",

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

        res.status(500).json({
            message: "couldn't authorisation "
        });
    }
}
//!GET ME
export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        if(!user){
            return res.status(404).json({
                message:"User couldn't found "
            })
        }
        const {passwordHash, ...userData} = user._doc;
        res.json(userData);
    } catch (err) {
        res.status(500).json({
            message: "No access "
        });
    }
}