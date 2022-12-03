const Users = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Sib = require("sib-api-v3-sdk");
const { default: mongoose } = require("mongoose");
const defaultClient = Sib.ApiClient.instance;
const apiKey = defaultClient.authentications["api-key"];

const Api = process.env.SENDINBLUE_API_KEY;

apiKey.apiKey = Api;

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const generateResetToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "10m",
  });
};

const tranEmailapiInstance = new Sib.TransactionalEmailsApi();

const sender = {
  name: "Shoppersden",
  email: " shoppersdenn@gmail.com",
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

  console.log(req.body);

  if (!email) {
    return res.status(400).json({
      error: "email is required",
    });
  }

  const user = await Users.findOne({ email: email });

  if (!user) {
    return res.status(400).json({
      error: "user with this email does not exist",
    });
  }

  const receivers = [
    {
      email: email,
    },
  ];

  const resetToken = generateResetToken(user._id);

  const resetUrl = `${process.env.CLIENT_URL}/reset/${user._id}/${resetToken}`;

  const getdata = tranEmailapiInstance
    .sendTransacEmail({
      sender: sender,
      to: receivers,
      subject: "Welcome to Shoppersden",
      htmlContent: `<h1>Reset your password</h1>
      <p>Click on the link below to reset your password</p>
      <a href=${resetUrl}>${resetUrl}</a>`,
    })
    .then((data) => {
      console.log("API called successfully. Returned data: " + user + data);
    })
    .catch((error) => {
      console.error(error);
    });

  console.log(getdata);

  res.status(200).send({
    ok: "success email sent",
    data: user,
  });
};

const resetPassword = async (req, res) => {
  const { new_password } = req.body;

  const token = req.headers.authorization.split(" ")[1];

  console.log(req.body);
  if (!new_password) {
    return res.status(400).send({ error: "please fill all the fields" });
  }

  // console.log(token);

  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) {
      return res.status(401).send({
        message: "token expired",
        error: "Expired link. Try again",
      });
    }
    // const payload = jwt.verify(token, process.env.JWT_SECRET);

    console.log(payload);

    try {
      const userExist = await Users.findById({ _id: payload.id });

      if (!userExist) {
        console.log("user doesnt exist");
        return res.status(40).send({
          ok: false,
          error: "user doesnt exist",
        });
      }

      const hash = await bcrypt.hash(req.body.new_password, 10);

      userExist.password = hash;

      await userExist.save();

      res.status(201).send({ message: "password reset successfully" });
    } catch (err) {
      console.log(err);
    }
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

  const filter =
    parseInt(req.query) === mongoose.Types.ObjectId ? req.query : {};

  if (req.query === mongoose.Types.ObjectId) {
    return res.status(400).send({ error: "invalid id" });
  }

  try {
    const users = await Users.find(filter);
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
  resetPassword,
};
