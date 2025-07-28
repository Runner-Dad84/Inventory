const db = require("../db/queries");

//return all item
async function returnAll(req, res) {
  let { category, weather } = req.query;
  console.log('req.query:', req.query);

  //if single category checked change string to array
  if (category && !Array.isArray(category)) {
    category = [category];
  }

  try {
    let items;
    if (!category && !weather) {
      items = await db.returnAllItems();
    } else {
       items = await db.returnCategories(category);
    }
    console.log("Items: ", items);
    res.render('index', { items });
  
    } catch (error) {
      console.error('Error', error);
      res.status(500).send('Error. No items found.')
    }
}

//post new item
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