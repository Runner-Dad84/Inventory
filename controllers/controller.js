const db = require("../db/queries");

async function newFunction(req, res) {
  try {
  const comments = await db.returnAllComments();
  console.log("Comments: ", comments);
  res.render('index', { comments });
  } catch (error) {
    console.error('Error', error);
    res.status(500).send('Error')
  }
}



module.exports = {
    newFunction
}