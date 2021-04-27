const router = require("express").Router();
const database = include("databaseConnection");
const dbModel = include("databaseAccessLayer");
// const posts = require("./FakeDb/posts");
//const dbModel = include('staticData');

router.get("/", (req, res) => {
  console.log("page hit");
  database.getConnection(function (err, dbConnection) {
    if (err) {
      res.render("error", { message: "Error connecting to MySQL" });
      console.log("Error connecting to mysql");
      console.log(err);
    } else {
      dbModel.getAllUsers((err, result) => {
        if (err) {
          res.render("error", { message: "Error reading from MySQL" });
          console.log("Error reading from mysql");
          console.log(err);
        } else {
          //success
          res.render("index", { allUsers: result });

          //Output the results of the query to the Heroku Logs
          console.log(result);
        }
      });
      dbConnection.release();
    }
  });
});

router.get("/ts/posts", (req, res) => {
  res.status(200).json({
    postId: 5,
    userName: "john",
    createdAt: new Date(),
    message: "Hi there",
    comments: "4",
    likes: "2",
  });
});

module.exports = router;
