const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const createError = require("http-errors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5006;
const connectDB = require("./Database/conn");
const Home_route = require("./Routes/RHome");
const Fpassword_route = require("./Routes/Extras");

const cors = require("cors");
connectDB();

app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(
  express.urlencoded({
    extended: false,
    limit: "5mb",
  })
);

app.use("/api/users", Home_route);
app.use("/api/users", Fpassword_route);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
