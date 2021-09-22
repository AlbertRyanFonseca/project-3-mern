const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');



const postSchema = new Schema({
    category: {
      type: String,
      required: true,
      trim: true
    },
    description: {
        type: String,
        required: 'You need to include a description',
        minlength: 1,
        maxlength: 350
      },
    category: {
      type: String,
      required: 'You need to select a category'
    },  
      createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
      },
      username: {
        type: String,
        required: true
      },
   
  });

  const Post = model('Post', postSchema);

  module.exports = Post;