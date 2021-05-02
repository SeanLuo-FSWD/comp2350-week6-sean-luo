const router = require("express").Router();
// const database = include("databaseConnection");
// const dbModel = include("databaseAccessLayer");
// const posts = require("./FakeDb/posts");
//const dbModel = include('staticData');
const { v4: uuidv4 } = require("uuid");
const formidable = require("formidable");

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

router.post("/ts/create_post", (req, res) => {
  const form = formidable({ multiples: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log("err " + err);
    } else {
      console.dir(fields);
      console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
      // console.log(files);
      console.log(files["filesToUpload[]"]);

      res.status(200).json({
        id: fields.id,
        userId: fields.userId,
        message: fields.message,
        createdAt: new Date(),
        likes: [],
        commentList: [],
        img_urls: [
          "https://idsp2.s3-us-west-1.amazonaws.com//images/1619930874561_07_optional_middle_name_1.png",
          "http://www.saltysfishandchips.ca/images/fish_chips.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/1024px-VAN_CAT.png",
          "https://i.pinimg.com/564x/87/3e/e1/873ee1a06a0e1fa2f49918322d77b658.jpg",
        ],
      });
    }
  });
});

const posts = [
  {
    id: "5",
    userName: "john",
    createdAt: new Date(),
    title: "Lorem, ipsum dolor ",
    message:
      "sit amet consectetur adipisicing elit. Maxime deserunt debitis voluptatem modi commodi nostrum officiis minima ut ipsa harum temporibus eum, asperiores soluta, repudiandae qui culpa vel sit dolores.",
    likes: [
      {
        id: "l51",
        userId: "1",
        postId: "5",
        username: "john",
      },
      { id: "l52", userId: 2, username: "jack", postId: "5" },
    ],
    commentList: [
      {
        id: "c51",
        userId: "1",
        username: "john",
        createdAt: new Date(),
        message: "john comment 1",
        postId: "5",
      },
      {
        id: "c52",
        userId: "2",
        username: "aaa",
        createdAt: new Date(),
        message: "aaa comment",
        postId: "5",
      },
      {
        id: "c53",
        userId: "3",
        username: "bbb",
        createdAt: new Date(),
        message: "bbb comment",
        postId: "5",
      },
    ],
  },
  {
    id: "4",
    title: "super post",
    userName: "john2",
    createdAt: new Date(),
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt debitis voluptatem modi commodi nostrum officiis minima ut ipsa harum temporibus eum, asperiores soluta, repudiandae qui culpa vel sit dolores.",
    likes: [
      {
        id: "l41",
        userId: "1",
        postId: "4",
        username: "john",
      },
      { id: "l42", userId: 2, postId: "4", username: "jack" },
      { id: "l43", userId: 3, postId: "4", username: "nonexist" },
    ],
    commentList: [
      {
        id: "c41",
        userId: "1",
        username: "john",
        createdAt: new Date(),
        message: "john comment 1",
        postId: "5",
      },
    ],
  },
  {
    id: "3",
    userName: "josh",
    title: "title post 2 lorem",
    createdAt: new Date(),

    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt debitis voluptatem modi commodi nostrum officiis minima ut ipsa harum temporibus eum, asperiores soluta, repudiandae qui culpa vel sit dolores.",
    likes: [
      {
        id: "l31",
        userId: "1",
        postId: "3",
        username: "john",
      },
      { id: "l32", userId: 2, postId: "3", username: "jack" },
    ],
    commentList: [
      {
        id: "c32",
        userId: "2",
        username: "aaa",
        postId: "5",
        createdAt: new Date(),
        message: "aaa comment",
      },
      {
        id: "c33",
        userId: "3",
        username: "bbb",
        postId: "5",
        createdAt: new Date(),
        message: "bbb comment",
      },
    ],
  },
];

module.exports = router;
