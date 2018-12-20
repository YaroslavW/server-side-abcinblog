import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import PostModel from './models/Post';

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

app.listen(3000, () => console.log("Server running on 3000 port"));