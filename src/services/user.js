const { User } = require("../models/User");
const bcrypt = require("bcrypt");

async function register(username, password) {
  const existing = await username.findOne({ email });

  if (existing) {
    throw new Error("Email is already used");
  }
  const user = new User({
    email,
    password: await bcrypt.hash(password, 10),
  });

  await user.save();
  return user;
}

async function login(username, password) {
  const user = await username.findOne({ email });

  if (!user) {
    throw new Error("Incorrect email or password!");
  }
  const match = await bcrypt.compare(password, user.password);
  
  if (!match) {
    throw new Error("Incorrect email or password!");
  }
  return user;
}
module.exports = {
  register,
  login,
};
