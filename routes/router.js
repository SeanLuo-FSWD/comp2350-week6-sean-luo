const router = require("express").Router();
// const database = include("databaseConnection");
// const dbModel = include("databaseAccessLayer");
// const posts = require("./FakeDb/posts");
//const dbModel = include('staticData');

router.get("/", (req, res) => {
  res.status(200).json(posts);
});

router.get("/ts/posts", (req, res) => {
  console.log("stopper stopper stopper stopper");
  console.log(posts);
  res.status(200).json(posts);
});

const posts = [
  {
    postId: 5,
    userName: "john",
    createdAt: new Date(),
    message: "Hi there",
    comments: "4",
    likes: "2",
    commentList: [],
  },
  {
    postId: 4,
    userName: "john2",
    createdAt: new Date(),
    message: "this is a new post by me",
    comments: "4",
    likes: "2",
    commentList: [],
  },
  {
    postId: 3,
    userName: "josh",
    createdAt: new Date(),
    message: "Josh first post",
    comments: "2",
    likes: "3",
    commentList: [],
  },
];

module.exports = router;
