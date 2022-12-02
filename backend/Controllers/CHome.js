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

const forgotPassword = async (req, res) => {
  email = req.body.email;

  old_password = req.body.old_password;
  new_password = req.body.new_password;

  console.log(req.body);

  if (!email) {
    return res.status(400).json({
      error: "email is required",
    });
  }

  const user = await Users.findOne({ email: email });
  if (!user) {
    return res.status(400).send({ error: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(old_password, user.password);

  if (!isMatch)
    return res.status(400).send({ error: "password is not correct" });

  const hash = await bcrypt.hash(new_password, 10);

  user.password = hash;

  await user.save();

  res.status(201).json({
    success: "password changed successfully",
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email });
    // console.log(user);
    if (!user) {
      return res.status(400).send({ error: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("password ");
      return res.status(400).send({ error: "Invalid credentials" });
    }
    // console.log(user._id);
    const token = generateToken(user._id);
    res.status(200).send({
      ok: "success",
      user,
      token,
    });
  } catch (err) {
    console.log(err);
  }
};

const getUsers = async (req, res) => {
  console.log(req.query);

  try {
    const users = await Users.find(req.query);
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
  forgotPassword,
};
