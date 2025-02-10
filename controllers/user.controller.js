const express = require("express");
const User = require("../model/user.model");
const bcrypt = require("bcrypt");

const userController = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).send("Please enter all fields");
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    user.save();
    return res.status(200).send("User created successfully");
  } catch (error) {
    return res.status(500).send("Server error");
  }
};

module.exports = userController;
