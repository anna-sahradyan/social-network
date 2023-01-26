import Post from "../models/Post.js";

//!CREATE
export const create = async (req, res) => {
    try {

        const doc = new Post({
            title: req.body.title,
            comments: req.body.comments,
            text: req.body.text,
            ImgUrl: req.body.ImgUrl,
            tags: req.body.tags.split(","),
            likes: req.body.likes,
            user: req.userId,
        });
        const post = await doc.save();
        res.json(post);

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
                success: true
            });
        });

    } catch (err) {
        res.status(500).json({
            message: "couldn't get posts"
        });
    }
}
//!UPDATE
export const update = async (req, res) => {

    try {
        const postId = req.params.id;
        await Post.updateOne({
                _id: postId,
            },
            {

                title: req.body.title,
                text: req.body.title,
                ImgUrl: req.body.ImgUrl,
                user: req.userId,
                likes: req.body.likes,
                tags: req.body.tags.split(","),
                comments: req.body.comments

            },
        );
        res.json({
            success: true
        })

    } catch (err) {
        res.status(500).json({
            message: "couldn't updates  post"
        });
    }

}
//!GETTAGS
export const getLastTags = async (req, res) => {
    try {
        const posts = await Post.find().limit(5).exec();
        const tags = posts.map((obj) => obj.tags)
            .flat()
            .slice(0, 5);
        res.json(tags);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Couldn't get tags",
        });
    }
};
//!GETCOMMENTS
export const getComments = async (req, res) => {
    try {
        const posts = await Post.find().limit(5).exec();
        const comments = posts.map((obj) => obj.comments)
            .flat()
            .slice(0, 5);
        res.json(comments);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Couldn't get comments",
        });
    }
};