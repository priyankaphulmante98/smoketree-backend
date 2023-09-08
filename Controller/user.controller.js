const UserDeatail = require("../Model/user.model");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserDeatail.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new UserDeatail({ username, email, password });

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
