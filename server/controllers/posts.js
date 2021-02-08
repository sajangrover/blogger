import Posts from '../models/posts.js';

const posts = {
    getPosts: async (req,res,next) => {
        try {
            const data = await Posts.find();
            res.status(200).json(data);
        }
        catch(error){
            res.status(404).json(error);
        }

    },
    createPost: async (req,res,next) => {
        try {
            const newPost = new Posts(req.body);
            console.log(newPost);
            await newPost.save();
            res.status(201).json({status: 'Post created successfully'});
        }
        catch(error){
            res.status(400).json(error);
        }
    }
}

export default posts;
