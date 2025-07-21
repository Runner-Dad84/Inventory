const express = require("express");
const postRouter = express.Router();
const controller = require("../controllers/controller");

//post item
postRouter.post('/new', controller.postInventory);


module.exports = postRouter;
