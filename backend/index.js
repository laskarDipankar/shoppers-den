const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const createError = require("http-errors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDB = require("./Database/conn");
const Home_route = require("./Routes/RHome");

const cors = require("cors");
connectDB();

app.use(cors());
app.use(express.json());
// app.use(morgan("dev"));

app.use("/api/users", Home_route);

// app.use((req, res, next) => {
//   next(createError.NotFound());
// });

// app.use((err, req, res) =>
//   res
//     .status(err.status || 500)
//     .json({ error: err.message || "Internal server error" })
// );

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
