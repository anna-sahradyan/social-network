import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {registerValidator} from "./validations/auth.js";
import {validationResult} from "express-validator";
import User from "./models/User.js"
import bcrypt from "bcrypt";

const app = express();
dotenv.config();
app.use(express.json());
mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log("DB OK")
})
    .catch((err) => console.log(err))

app.post("/auth/register", registerValidator, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array());
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        const doc = new User({
            email: req.body.email,
            fullName: req.body.fullName,
            avatarUrl: req.body.avatarUrl,
            password: passwordHash,
        });
        const user = await doc.save()
        res.json(user)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "dont work"
        });
    }


})


app.listen(8000, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log(`Server is running in http://localhost:${8000}`)
})