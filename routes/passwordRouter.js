const express = require("express");
const passwordRouter = express.Router();

//form
passwordRouter.get("/password", (req, res) => { res.render("password") });

module.exports = passwordRouter;