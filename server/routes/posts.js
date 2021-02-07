import express from 'express';
//import posts from '../controllers/posts.js';

const postRouter = express.Router();

postRouter.get('/', (req,res,next) => {
    res.json("dummy data");
})

export default postRouter;