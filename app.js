const express = require("express");
const indexRouter = require("./routes/router");
const newRouter = require("./routes/newRouter");
const postRouter = require("./routes/postRouter");
const app = express();
const path = require("node:path");

//use main js file
app.use(express.static('public'));

//parse data
app.use(express.urlencoded({ extended: true })); // for form submissions
app.use(express.json());

//routers
app.use("/", indexRouter);
app.use("/", newRouter);
app.use("/", postRouter);


//set veiw engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});