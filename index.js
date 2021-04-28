//Define the include function for absolute file name
global.base_dir = __dirname;
global.abs_path = function (path) {
  return base_dir + path;
};
global.include = function (file) {
  return require(abs_path("/" + file));
};

const express = require("express");
// const database = include("databaseConnection");
const router = include("routes/router");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const port = process.env.PORT || 8080;

// database.getConnection((err, dbConnection) => {
//   if (!err) {
//     console.log("Successfully connected to MySQL");
//   } else {
//     console.log("Error Connecting to MySQL");
//     console.log(err);
//   }
// });

const app = express();
app.set("view engine", "ejs");

app.use(cors());
app.use(jsonParser);
app.use("/", router);
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   next();
// });
app.listen(port, () => {
  console.log("Node application listening on port " + port);
});
