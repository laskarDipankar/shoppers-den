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
const Sib = require("sib-api-v3-sdk");
const defaultClient = Sib.ApiClient.instance;
const apiKey = defaultClient.authentications["api-key"];

const Api = process.env.SENDINBLUE_API_KEY;

apiKey.apiKey = Api;

// const tranEmailapiInstance = new Sib.TransactionalEmailsApi();

// const sender = {
//   name: "Shoppersden",
//   email: " shoppersdenn@gmail.com",
// };

// const receivers = [
//   {
//     email: "dipankar.laskar45@gmail.com",
//   },
// ];

// tranEmailapiInstance
//   .sendTransacEmail({
//     sender: sender,
//     to: receivers,
//     subject: "Welcome to Shoppersden",
//     htmlContent: "Welcome to Shoppersden",
//   })
//   .then((data, response) => {
//     console.log("API called successfully. Returned data: " + data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

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
