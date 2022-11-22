const Users = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const getHome = (req, res) => {
  res.send({
    data: [],
    message: "connecetd through controller and route",
  });
};

const signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  console.log(req.body);

  if (!firstName || !lastName || !email || !password) {
    return res.status(422).send({ error: "please fill all the fields" });
  }

  try {
    const userExist = await Users.findOne({ email });
    if (userExist) {
      return res.status(400).send({
        // data: userExist,
        ok: false,
        error: "email already exist",
      });
    }
    const hash = await bcrypt.hash(req.body.password, 10);
    const user = new Users({ firstName, lastName, email, password: hash });
    await user.save();
    res.status(201).send({ message: "user registered successfully" });
  } catch (err) {
    console.log(err);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(400).send({ error: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("password ");
      return res.status(400).send({ error: "Invalid credentials" });
    }
    console.log(user._id);
    const token = generateToken(user._id);
    res.status(200).send({
      ok: "success",
      token,
    });
  } catch (err) {
    console.log(err);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).send(users);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getHome,
  signup,
  getUsers,
  loginUser,
};
