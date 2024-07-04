const userModel = require("../models/userModel");

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getUsers();
    res.json({ data: users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.getUserById(id);
    res.json({ data: user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await userModel.createUser({ name, email });
    res.json({ data: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
