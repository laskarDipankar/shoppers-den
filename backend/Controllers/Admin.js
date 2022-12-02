const Admin = require("../Model/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Shop = require("../Model/Shop");
const Users = require("../Model/User");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};

const admin = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  console.log(req.body);

  if (!firstName || !lastName || !email || !password) {
    return res.status(422).send({ error: "please fill all the fields" });
  }

  try {
    const userExist = await Admin.findOne({ email });
    if (userExist) {
      return res.status(400).send({
        // data: userExist,
        ok: false,
        error: "email already exist",
      });
    }
    const hash = await bcrypt.hash(req.body.password, 10);
    const user = new Admin({ firstName, lastName, email, password: hash });
    await user.save();
    res.status(201).send({ message: "user registered successfully" });
  } catch (err) {
    console.log(err);
  }
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Admin.findOne({ email });
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

const getAdmin = async (req, res) => {
  try {
    const admin = await Admin.find();
    res.status(200).send(admin);
  } catch (err) {
    console.log(err);
  }
};

const verifyShop = async (req, res) => {
  console.log(req.admin);
  console.log(req.body);

  const shopId = req.params.id;
  const verify = req.body.verify;

  if (!shopId) {
    return res.status(400).json({
      error: "Shop id is required.",
    });
  }
  try {
    const shop = await Shop.findById(shopId);

    if (!shop) return res.status(404).json({ error: "Shop doesn't exist." });

    shop.verified = verify;
    await shop.save();

    return res.status(200).json({ success: true, shop });
  } catch (err) {
    console.log(err);
  }
};

const deleteShop = async (req, res) => {
  const shopid = req.params.id;
  const admin = req.admin;
  console.log(shopid);

  if (!shopid)
    return res.status(400).json({
      error: "Shop id is required.",
    });

  try {
    const shop = await Shop.findById(shopid);
    if (!shop) return res.status(404).json({ error: "Shop doesn't exist." });
    const userID = shop.userID;
    await Users.findOneAndUpdate({ _id: userID }, { $unset: { shop: "" } });

    await shop.remove();

    return res.status(200).json({ success: true, message: "Shop deleted." });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({ error: error.message });
  }
};
module.exports = {
  admin,
  getAdmin,
  loginAdmin,
  verifyShop,
  deleteShop,
};
