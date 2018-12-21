import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import PostController from './controllers/PostController';
const Post = new PostController();
// import PostModel from './models/Post'; перенесли в контроллер.
// import Post from './models/Post'; перенесли в контроллер.
const app = express();

mongoose.connect('mongodb://localhost/server-side');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/posts', Post.index);
app.get('/posts/:id', Post.read);
app.post('/posts', Post.create);
app.delete('/posts/:id', Post.delete);
app.put('/posts/:id', Post.update);

app.listen(3000, () => console.log("Server running on 3000 port"));