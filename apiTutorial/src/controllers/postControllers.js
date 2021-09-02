const { User, Post } = require("../db/models");




async function postUpdate(req, res, next) {
    const { tittle, content } = req.body;
    const postId = req.params.id;

    try {
        const post = await Post.findOne({
            where: { id: PostId }
        });

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        Post.title = tittle;
        Post.content = content;
        await Post.save();

        res.json(Post);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
}



module.exports = {
    postUpdate
}