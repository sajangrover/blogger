import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const commentSchame = new Schema({
    author: {
        type:  String,
        required: true
    },
    comment: {
        type:  String,
        required: true
    },
    like: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

const postSchema = new Schema({
    author: {
        type:  String,
        required: true
    },
    title: {
        type:  String,
        required: true
    },
    content: {
        type:  String,
        required: true
    },
    image: {
        type:  String
    },
    like: {
        type: Number,
        default: 0
    },
    comments: [commentSchame]
}, {
    timestamps: true
});

const Posts = mongoose.model("posts", postSchema);
export default Posts;