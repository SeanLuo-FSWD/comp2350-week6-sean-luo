const router = require("express").Router();
// const database = include("databaseConnection");
// const dbModel = include("databaseAccessLayer");
// const posts = require("./FakeDb/posts");
//const dbModel = include('staticData');
const { v4: uuidv4 } = require("uuid");

router.get("/", (req, res) => {
  res.status(200).json(posts);
});

router.get("/ts/posts", (req, res) => {
  console.log("stopper stopper stopper stopper");
  console.log(posts);
  res.status(200).json(posts);
});

router.post("/ts/register", (req, res) => {
  console.log("/ts/register /ts/register /ts/register");
  console.log(req.body);
  res.status(200).json(posts);
});

router.post("/ts/like_post", (req, res) => {
  console.log("like_post like_post like_post like_post");

  console.log(req.body);

  res.status(200).json(req.body);
});

router.post("/ts/add_comment", (req, res) => {
  console.log("add_comment add_comment add_comment add_comment");

  console.log(req.body);

  res.status(200).json(req.body);
});

const posts = [
  {
    postId: 5,
    userName: "john",
    createdAt: new Date(),
    message: "Hi there",
    likes: [
      { userId: 1, username: "john" },
      { userId: 2, username: "jack" },
    ],
    commentList: [
      {
        commentId: uuidv4(),
        userId: 1,
        username: "john",
        createdAt: new Date(),
        message: "john comment 1",
      },
      {
        commentId: uuidv4(),
        userId: uuidv4(),
        username: "aaa",
        createdAt: new Date(),
        message: "aaa comment",
      },
      {
        commentId: uuidv4(),
        userId: uuidv4(),
        username: "bbb",
        createdAt: new Date(),
        message: "bbb comment",
      },
    ],
  },
  {
    postId: 4,
    userName: "john2",
    createdAt: new Date(),
    message: "this is a new post by me",
    likes: [
      { userId: 1, username: "john" },
      { userId: 2, username: "jack" },
      { userId: 3, username: "bob" },
      { userId: 4, username: "alice" },
    ],
    commentList: [
      {
        commentId: uuidv4(),
        userId: uuidv4(),
        username: "ccc",
        createdAt: new Date(),
        message: "ccc comment 1",
      },
    ],
  },
  {
    postId: 3,
    userName: "josh",
    createdAt: new Date(),
    message: "Josh first post",
    likes: [
      { userId: 1, username: "john" },
      { userId: 2, username: "jack" },
      { userId: 4, username: "alice" },
    ],
    commentList: [
      {
        commentId: uuidv4(),
        userId: uuidv4(),
        username: "aaa",
        createdAt: new Date(),
        message: "aaa comment",
      },
      {
        commentId: uuidv4(),
        userId: uuidv4(),
        username: "bbb",
        createdAt: new Date(),
        message: "bbb comment",
      },
    ],
  },
];

module.exports = router;
