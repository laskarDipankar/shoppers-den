const getHome = (req, res) => {
  res.send({
    data: [],
    message: "connecetd through controller and route",
  });
};

module.exports = getHome;
