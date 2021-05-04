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

router.get("/api/post", (req, res) => {
  console.log("stopper stopper stopper stopper");
  console.log(posts);
  res.status(200).json(posts);
});

router.get("/ts/allusers", (req, res) => {
  console.log("allusers allusers allusers allusers allusers");
  console.log(users);
  res.status(200).json(users);
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

router.put("ts/user/edit", (req, res) => {
  console.log("ts/user/edit ts/user/edit ts/user/edit");
  res.status(200).json(req.body);
});

router.post("/post", (req, res) => {
  const form = formidable({ multiples: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log("err " + err);
    } else {
      res.status(200).json({
        id: uuidv4(),
        userId: fields.userId,
        message: fields.message,
        createdAt: new Date(),
        likes: [],
        commentList: [],
        img_urls: [
          // "https://idsp2.s3-us-west-1.amazonaws.com//images/1619930874561_07_optional_middle_name_1.png",
          "http://www.saltysfishandchips.ca/images/fish_chips.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/1024px-VAN_CAT.png",
          "https://i.pinimg.com/564x/87/3e/e1/873ee1a06a0e1fa2f49918322d77b658.jpg",
        ],
      });
    }
  });
});

router.get("/ts/person/:id", (req, res) => {
  console.log("person person person person person");
  console.log(req.params.id);

  let info;
  for (let i = 0; i < users.length; i++) {
    if (req.params.id == users[i]["id"]) {
      info = users[i];
    }
  }

  let feed = [];

  posts.forEach((post) => {
    if (post.userId == info.id) {
      feed.push(post);
    }
  });

  let person = {};

  person["info"] = info;
  person["feed"] = feed;

  res.status(200).json(person);
});

const users = [
  {
    id: "1",
    email: "bob@bob.com",
    userName: "bob",
    age: 5,
    gender: "male",
    location: "burnaby",
    img: null,
    last_login: new Date(),
    following: ["2"],
    password: "bob@bob.com",
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png",
  },
  {
    id: "2",
    email: "alice@alice.com",
    userName: "alice",
    age: 50,
    gender: "female",
    location: "vancouver",
    img: "http://www.saltysfishandchips.ca/images/fish_chips.jpg",
    last_login: new Date(),
    following: ["1", "3"],
    password: "alice@alice.com",
  },
  {
    id: "3",
    email: "josh@josh.com",
    userName: "josh",
    age: 30,
    gender: "male",
    location: "richmond",
    img:
      "https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.saltys.com/wp-content/uploads/2020/01/good-for-you-crab-1170x781.jpg",
    last_login: new Date(),
    following: [],
    password: "josh@josh.com",
  },
  {
    id: "4",
    email: "cow@cow.com",
    userName: "cow",
    age: 30,
    gender: "other",
    location: "richmond",
    img:
      "https://kids.kiddle.co/images/thumb/b/b4/Cow_eating_some_grass.jpg/500px-Cow_eating_some_grass.jpg",
    last_login: new Date(),
    following: [],
    password: "cow@cow.com",
  },
];

const posts = [
  {
    id: "5",
    userId: "1",
    userName: "bob",
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
    userId: "2",
    title: "super post",
    userName: "alice",
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
    userId: "3",
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
