import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    comments:{
        type: String,
        required: true,

    },
    text: {
        type: String,
        required: true,
        unique: true,

    },
    tags: {
        type: Array,
        default: [],

    },
    likes:{
        type: Number,
        default: 0,
    },
    viewsCount: {
        type: Number,
        default: 0,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        unique: true,

    }, ImgUrl: String,
}, {timestamps: true});

export default mongoose.model("Post", PostSchema);
