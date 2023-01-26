import express from "express";
import mongoose from "mongoose";
import * as  dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.router.js";
import cors from "cors";
import multer from "multer";
import checkAuth from "./utils/checkAuth.js";

const app = express();
dotenv.config();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    }
)
//!uploads img
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({storage});

app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`,

    });
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static("uploads"))
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