const Shop = require("../Model/Shop");
const User = require("../Model/User");

const shopRegistration = async (req, res) => {
  const user = req.user;
  const {
    shopName,
    phoneNumber,
    state,
    city,
    governmentID,
    governmentIDImage,
    shopImage,
  } = req.body;
  console.log(req.body);

  if (
    !shopName ||
    !phoneNumber ||
    !state ||
    !city ||
    !governmentID ||
    !governmentIDImage ||
    !shopImage
  ) {
    return res.status(400).json({ error: "please fill all the fields" });
  }
  // console.log("in try");

  try {
    const shop = new Shop({
      shopName,
      phoneNumber,
      state,
      city,
      governmentID,
      governmentIDImage,
      shopImage,
      userID: user._id,
    });

    await shop.save();
    await User.findOneAndUpdate({ _id: user._id }, { shop: shop._id });

    return res.status(201).json({
      data: shop,
      message: "shop registration done",
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const updatedShopDetails = async (req, res) => {
  const shopid = req.params.id;

  // console.log(req.body);

  if (!shopid)
    return res.status(400).json({
      error: "Shop id is required.",
    });

  if (req.user.shop.toString() !== shopid.toString())
    return res.status(400).json({
      error: "You can't update others shop details.",
    });

  try {
    const shop = await Shop.findById(shopid);

    if (!shop) return res.status(404).json({ error: "Shop doesn't exist." });

    const updatedShop = await Shop.findOneAndUpdate({ _id: shopid }, req.body, {
      new: true,
    });

    return res.status(200).json({ success: true, shop: updatedShop });
  } catch (error) {
    console.log(error);
    return res
      .status(error.status || 500)
      .json({ error: "occurence of server error" });
  }
};
const getAllShopsDetails = async (req, res) => {
  const { limit, skip, search } = req.query;
  // const count = req.query.count;

  //
  // console.log({ shopName: { $regex: `${search}`, $options: "i" } });

  const filter = search
    ? { shopName: { $regex: `${search}`, $options: "i" } }
    : req.query;

  console.log(req.query);
  try {
    const shops = await Shop.find(filter)
      .limit(limit)
      .skip(skip)
      .sort("createdAt")
      .populate("userID", "firstName lastName email phoneNumber _id");

    res.status(200).json({
      message: "data",
      data: shops,
      count: shops.length,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateIsActive = async (req, res) => {
  const shopid = req.params.id;

  if (!shopid)
    return res.status(400).json({
      error: "Shop id is required.",
    });

  if (req.user.shop.toString() !== shopid.toString())
    return res.status(400).json({
      error: "You can't update others shop details.",
    });

  try {
    const shop = await Shop.findById(shopid);

    if (!shop) return res.status(404).json({ error: "Shop doesn't exist." });

    const updatedShop = await Shop.findOneAndUpdate({ _id: shopid }, req.body, {
      new: true,
    });

    return res.status(200).json({ success: true, shop: updatedShop });
  } catch (error) {
    console.log("4");
    return res.status(error.status || 500).json({ error: "server error" });
  }
};

const getShopDetails = async (req, res) => {
  const shopid = req.params.id;

  if (!shopid)
    return res.status(400).json({
      error: "Shop id is required.",
    });

  try {
    const shop = await Shop.findById(shopid).populate(
      "userID",
      "firstName lastName email phoneNumber _id"
    );
    console.log(shop);

    if (!shop) return res.status(404).json({ error: "Shop doesn't exist." });

    return res.status(200).json({ success: true, data: shop });
  } catch (error) {
    return res.status(error.status || 500).json({ error: error.message });
  }
};

const deleteShop = async (req, res) => {
  const shopid = req.params.id;
  const user = req.user;

  if (!shopid)
    return res.status(400).json({
      error: "Shop id is required.",
    });

  if (user.shop.toString() !== shopid.toString())
    return res.status(400).json({
      error: "You can't delete others shop.",
    });

  try {
    const shop = await Shop.findById(shopid);
    if (!shop) return res.status(404).json({ error: "Shop doesn't exist." });

    await User.findOneAndUpdate({ _id: shop.userID }, { $unset: { shop: "" } });
    await shop.remove();

    return res.status(200).json({ success: true, message: "Shop deleted." });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({ error: error.message });
  }
};

module.exports = {
  shopRegistration,
  updatedShopDetails,
  getShopDetails,
  getAllShopsDetails,
  deleteShop,
  updateIsActive,
};
