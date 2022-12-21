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
        const posts = await Post.find().populate("user").exec();
        res.json(posts)

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "couldn't get posts"
        });
    }

}
//!GET ONE
export const getOne = async (req, res) => {
    try {
        const postId = req.params.id;
        Post.findOneAndUpdate({
                _id: postId,
            },
            {
                $inc: {viewsCount: 1},
            },
            {
                returnDocument: "after",
            },
            (err, doc) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        message: "couldn't get back  posts"
                    });
                }
                if (!doc) {
                    return res.status(404).json({
                        message: "couldn't found  a post"
                    })
                }
                res.json(doc);
            },
        );

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "couldn't get posts"
        });
    }

}
//!DELETE
export const remove = async (req, res) => {
    try {
        const postId = req.params.id;
        Post.findByIdAndDelete({
            _id: postId
        }, (err, doc) => {
            if (err) {
                return res.status(500).json({
                    message: "couldn't found a post"
                });
            }
            if (!doc) {
                return res.status(404).json({
                    message: "couldn't found  a post"
                })
            }
            res.json({
                success:true
            });
        });

    } catch (err) {
        console.log(err)
    }
}
