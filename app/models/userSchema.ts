import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  googleId: String,
  spotifyId: String,
  spotifyRefresh: String,
  spotifyAccess: String,
});

const User = mongoose.model('users', userSchema);

export default User;
