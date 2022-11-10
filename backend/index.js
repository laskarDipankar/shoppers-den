const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const connectDB = require("./Database/conn");
const Home_route = require("./Routes/RHome");

connectDB();

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
app.use(express.json());

app.use("/api/users", Home_route);
