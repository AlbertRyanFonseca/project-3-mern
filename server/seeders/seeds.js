const faker = require ('faker');

const db = require('../config/connection');
const { Post, User } = require('../models');

db.once('open', async () => {
    await Post.deleteMany({});
    await User.deleteMany({});


const userData = [];

for (let i=0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
}

const createdUsers = await User.collection.insertMany(userData);

let createdPosts = [];

for (let i=0; i < 100; i += 1) {

    const description = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    // only one category, need to figure out how to randomly choose multiple categories
    const category = "PM";

    const createdPost = await Post.create({ description, username, category });

    const updatedUser = await User.updateOne(
        { _id: userId },
        { $push: { posts: createdPost._id }}

    );

    createdPosts.push(createdPost);
}

    console.log('all done!');
    process.exit(0);


});