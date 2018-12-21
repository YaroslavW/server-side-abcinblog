import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import PostModel from './models/Post';
import Post from './models/Post';
const app = express();

mongoose.connect('mongodb://localhost/server-side');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/posts', (req, res) => {
    const data = req.body;
    // console.log(req.body);
    const post = new PostModel({
        title: data.title,
        text: data.text
    });

    post.save().then(() => {
        res.send({ status: "OK"});
    });
});

app.get('/posts', (req, res) => {
    Post.find().then((err, posts) => {
        if(err){
            res.send(err);
        }
        res.json(posts);
    });
});

app.delete('/posts/:id', (req, res) => {
    PostModel.remove({
        _id: req.params.id
    }).then(post => {
        if(post) {
            res.json({ status: "deleted"});
        } else {
            res.json({ status: "error"});
        }
    });
});

app.listen(3000, () => console.log("Server running on 3000 port"));