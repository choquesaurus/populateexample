import mongoose,{ Schema } from "mongoose";
const UserSchema = new Schema({
    username: String,
    posts: [{
      type: Schema.Types.ObjectId,
      ref: 'posts'
    }]
  },{
      collection:'users'
  });
const PostSchema = new Schema({
    content: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
  },{
      collection:'posts'
  })
  const Post = mongoose.model('posts', PostSchema);
  const User = mongoose.model('users', UserSchema);
module.exports = {
    User, Post,
  }