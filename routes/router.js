const express = require("express");
const indexRouter = express.Router();
const commentController = require("../controllers/controller");

//show all items
indexRouter.get('/', commentController.rFiltered);

//delete item
indexRouter.post("/:id/delete", commentController.deleteInventoryItem);


module.exports = indexRouter;

