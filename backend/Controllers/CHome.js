const Users = require('../Model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

const getHome = (req, res) => {
  res.send({
    data: [],
    message: 'Connected through controller and route',
  });
};

const signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(422).send({ error: 'please fill all the fields' });
  }

  try {
    const userExist = await Users.findOne({ email });
    if (userExist) {
      return res.status(400).send({
        ok: false,
        error: 'email already exist',
      });
    }
    const hash = await bcrypt.hash(req.body.password, 10);
    const user = new Users({ firstName, lastName, email, password: hash });
    await user.save();
    res.status(201).send({ message: 'user registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).send({ error: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('password ');
      return res.status(400).send({ error: 'Invalid credentials' });
    }
    const token = generateToken(user._id);
    res.status(200).send({
      ok: 'success',
      user,
      token,
    });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await Users.find(req.query);
    res.status(200).send(users);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

module.exports = {
  getHome,
  signup,
  getUsers,
  loginUser,
};
