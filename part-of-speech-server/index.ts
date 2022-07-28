const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

//using morgan middleware
app.use(morgan(":method :url :status  :response-time ms"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//creating server
http.createServer(app).listen(process.env.PORT, () => {
  console.log(`YOUR SERVER IS RUNNING ON PORT ${process.env.PORT} ...`);
});
