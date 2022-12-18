import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";


const app = express();
dotenv.config();
app.use(express.json());
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log("DB OK")
})
    .catch((err) => console.log(err))
app.use("/users",userRoutes)


app.listen(8000, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log(`Server is running in http://localhost:${8000}`)
})