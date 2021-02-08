import express from 'express';
import posts from '../controllers/posts.js';

const postRouter = express.Router();

postRouter.get('/', posts.getPosts);
postRouter.post('/',posts.createPost);

export default postRouter;