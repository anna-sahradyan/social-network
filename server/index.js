import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.router.js";

import multer from "multer";
import checkAuth from "./utils/checkAuth.js";

const app = express();
dotenv.config();
//!uploads img
const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, "uploads");
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({storage});
app.post("/upload",checkAuth, upload.single("image"), (req, res) => {
    res.json({
        url: `/uploads${req.file.originalname}`,

    });
});
app.use(express.json());
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

//!connect mongoose
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log("DB OK")
})
    .catch((err) => console.log(err))


app.listen(8000, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log(`Server is running in http://localhost:${8000}`)
})