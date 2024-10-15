const jwt = require('jsonwebtoken');
const Message = require('../model/messageModel');
const User = require('../model/userModel');

exports.register = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
}

exports.login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found!");

  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw new Error("Invalid password!");

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
  return token;
}

exports.sendMessage = async (userId, content) => {
  const message = new Message({ sender: userId, content });
  await message.save();
  return message;
}