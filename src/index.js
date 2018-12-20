import mongoose from 'mongoose';

import PostModel from './models/Post';

mongoose.connect('mongodb://localhost/server-side');

const post = new PostModel({
    title: "Первая запись",
    text: "Привет Мир"
});

post.save().then(() => console.log('OK'));