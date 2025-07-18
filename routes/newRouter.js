const express = require("express");
const newRouter = express.Router();

//form
newRouter.get("/new", (req, res) => { res.render("new") });

module.exports = newRouter;
