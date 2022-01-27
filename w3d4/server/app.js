const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bcrypt = require("bcryptjs");
const logger = require("morgan");
const generateUserHelpers = require("./helpers/userHelpers");

const app = express();
const salt = bcrypt.genSaltSync(10);
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  cookieSession({
    name: "session",
    keys: ["bob", "Little Chicken dancing in the prairie"],
  })
);

// Man in the middle attack

// IPHONE ----- Apple Store (Evil) ----- INTERNET COFFEE

// REQ -> CookieParser -> ROUTE -> RES

const user1 = {
  name: "Dimitri Ivanovich Mendeleiv",
  email: "periodic@table.com",
  password: bcrypt.hashSync("hydrogen", salt),
  secret: "It was actually my friend's idea from Tesla, that wasn't born yet",
};

const user2 = {
  name: "Leon Nikolaievitch Tolstoi",
  email: "war@peace.com",
  password: bcrypt.hashSync("karenina", salt),
  secret: "Prefers cartoons over movies.",
};

const userList = [user1, user2];

const userDatabaseIsh = { "periodic@table.com": user1, "war@peace.com": user2 };

const { authenticateUser, addUser } = generateUserHelpers(userDatabaseIsh, bcrypt, salt);

app.get("/", (req, res) => {
  return res.render("index");
});

app.post("/login", (req, res) => {
  // Form information, part of the request (body)
  const email = req.body.email;
  const password = req.body.password;

  // const { email, password } = req.body;

  const { error, data } = authenticateUser(email, password);

  if (error) {
    console.log(error);
    return res.redirect("/");
  }
  // Great success! email & password are matching and existent
  // res.cookie("email", email);
  req.session.email = email;
  return res.redirect("/secret");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  // const name = req.body.name
  // const email = req.body.email
  // const password = req.body.password
  // const secret = req.body.secret

  const { error, data } = addUser(req.body);

  if (error) {
    console.log(error);
    return res.redirect("/register");
  }

  req.session.email = data.email;

  return res.redirect("/secret");
});

app.get("/secret", (req, res) => {
  console.log(userDatabaseIsh);
  // const email = req.cookies.email; // Because of cookieParser
  const email = req.session.email; // Because of cookieSession

  if (!userDatabaseIsh.hasOwnProperty(email)) {
    return res.redirect("/");
  }

  const { name, secret } = userDatabaseIsh[email];

  const templateVars = { name, secret };

  return res.render("secret", templateVars);
});

module.exports = app;

// REQ -> !&63 -> cookieSession -> Bob -> Robert

// RES -> cookieSession (req) -> cookie
