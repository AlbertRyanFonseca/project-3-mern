const { User, Post } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {

      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('posts');
            
      
          return userData;
        }
      
        throw new AuthenticationError('Not logged in');
      },

        // return all posts from a single user (based on username)
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createdAt: -1 });
          },

        // return a single post (based on post ID)  
        post: async (parent, { _id }) => {
            return Post.findOne({ _id });
        },

        // get all posts

        posts: async() => {
          return Post.find();
        },

        // get all users
        users: async () => {
          return User.find();
          // .select('-__v -password')
        },
          
      // },

        },

    Mutation: {

        // add a new user
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },

        // existing user login
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
          
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const token = signToken(user);
            return { token, user };
          },


        addPost: async (parent, args) => {

        if(context.user){    
          const post = await Post.create({ ...args, username: context.user.username });

          await User.findByIdAndUpdate(
            { _id: user._id},
            { $push: { posts: post._id} },
            { new: true }
          );
          return post;
        }
        
            throw new AuthenticationError("You're not logged in!");
        }
    }


    };

// export resolvers    
module.exports = resolvers;