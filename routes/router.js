const express = require("express");
const indexRouter = express.Router();
const commentController = require("../controllers/controller");

//show all items
indexRouter.get('/', controller.returnAll);