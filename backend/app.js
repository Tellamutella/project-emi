require('dotenv').config();

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");
const Chatkit = require('@pusher/chatkit-server')

var app = express();
console.log(process.env.DB)
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;

const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

app.use(
  session({
    key: "user_sid",
    secret: "basic-auth-secret",
    resave: true,
    saveUninitialized: true, // option when youre setting up the cookie for the session for the first time, whether it will automatically save or not
    cookie: { maxAge: 24 * 60 * 60 },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 // 1 day
    })
  })
);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public/build")));

app.use(
  cors({
    credentials: true,
    origin: [process.env.URL]
  })
);


global.chatkit = new Chatkit.default({
  instanceLocator: process.env.CHATKIT_INSTANCE,
  key: process.env.SECURE_KEY,
})

app.use("/api", require("./routes/auth/customer"));

const index = require('./routes/index');
app.use('/', index);
app.use('/api', require('./routes/project'));
app.use('/api', require('./routes/auth/professional'))
app.use('/api', require('./routes/quote'))

// app.use((req,res)=> {
//   res.redirect(`/?redirectUrl=${req.originalUrl}`)
// })

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/build/index.html");
});

module.exports = app;
