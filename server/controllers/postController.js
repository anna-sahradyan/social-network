import Post from "../models/Post.js";
//!CREATE
export const create = async (req, res) => {
    try {
        const doc = new Post({
            title: req.body.title,
            text: req.body.title,
            ImgUrl: req.body.ImgUrl,
            tags: req.body.tags,
            user: req.userId,
        });
        const post = await doc.save();
        res.json(post)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "can't create post"
        });
    }
}
//!GET ALL
export const getAll = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "couldn't get posts"
        });
    }

}