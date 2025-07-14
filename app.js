const express = require("express");
const app = express();

//use main js file
app.use(express.static('public'));

//routers
app.use("/", indexRouter);

//set veiw engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});