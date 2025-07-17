const express = require("express");
const indexRouter = require("./routes/router");
const app = express();
const path = require("node:path");

//use main js file
app.use(express.static('public'));

//routers
app.use("/", indexRouter);

//set veiw engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});