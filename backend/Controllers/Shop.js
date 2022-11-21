const Shop = require("../Model/Shop");

const shopRegistration = async (req, res) => {
  const { shopName, state, city, governmentId, governmentIdImaage, shopImage } =
    req.body;

  if (
    !shopName ||
    !state ||
    !city ||
    !governmentId ||
    !governmentIdImaage ||
    !shopImage
  ) {
    return res.status(422).send({ error: "please fill all the fields" });
  }
  try {
    const shop = new Shop({
      shopName,
      state,
      city,
      governmentId,
      governmentIdImaage,
      shopImage,
    });

    await shop.save();
  } catch (err) {
    console.log(err);
  }
};

module.exports = shopRegistration;
