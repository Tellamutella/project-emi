var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");

var app = express();

mongoose
  .connect(`mongodb://localhost/emi-project`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
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
app.use(express.static(path.join(__dirname, "public")));

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"]
  })
);

app.use("/api", require("./routes/auth/user"));

app.listen(5000, () =>
  console.log("emi backend running on port 5000 🎧 🥁 🎸 🔊")
);

const index = require('./routes/index');
app.use('/', index);
app.use('/api', require('./routes/project'));
app.use('/api', require('./routes/auth/professional'))
app.use('/api', require('./routes/quote'))

module.exports = app;
