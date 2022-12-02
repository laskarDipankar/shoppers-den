const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./Database/conn');
const Home_route = require('./Routes/RHome');
const port = process.env.PORT || 5005;

connectDB();

app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(
  express.urlencoded({
    extended: false,
    limit: '5mb',
  })
);
app.use('/api/users', Home_route);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
