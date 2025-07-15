const db = require("../db/queries");

async function returnAll(req, res) {
  try {
  const comments = await db.returnAllItems();
  console.log("Items: ", items);
  res.render('index', { items });
  } catch (error) {
    console.error('Error', error);
    res.status(500).send('Error. No items found.')
  }
}

module.exports = {
    returnAll
}