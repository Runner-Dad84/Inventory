const db = require("../db/queries");

async function returnAll(req, res) {
  try {
  const items = await db.returnAllItems();
  console.log("Items: ", items);
  res.render('index', { items });
  } catch (error) {
    console.error('Error', error);
    res.status(500).send('Error. No items found.')
  }
}

async function postInventory(req, res)
 {
  const { name, type, price, weather, description } = req.body;
  console.log(req.body)
  console.log('test 2');
  try {
    await db.postItem(name, type, price, weather, description);
    console.log("Successfully added new item")
    res.redirect('/');
  } catch (err) {
     console.error(err);
    res.status(500).send("Error saving item.")
  }

 }
module.exports = {
    returnAll,
    postInventory
}