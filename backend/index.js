const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDB = require("./Database/conn");
const Home_route = require("./Routes/RHome");
const signup_route = require("./Routes/RHome");
const getUsers_route = require("./Routes/RHome");
const admin_route = require("./Routes/RHome");
const getAdmin_route = require("./Routes/RHome");
const loginAdmin_route = require("./Routes/RHome");
const loginUser_route = require("./Routes/RHome");
const cors = require("cors");
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/users", Home_route);
app.use("/api/users", signup_route);
app.use("/api/users", getUsers_route);
app.use("/api/users", admin_route);
app.use("/api/users", getAdmin_route);
app.use("/api/users", loginAdmin_route);
app.use("/api/users", loginUser_route);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
