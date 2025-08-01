const db = require("../db/queries");


async function rFiltered(req, res) {
  let { category, weather } = req.query;
  
  if (category && !Array.isArray(category)) {category = [ category ]};
  if (weather && !Array.isArray(weather)) {weather = [ weather ]};

  console.log('category:', category);
  console.log('weather:', weather);

  try {
  let items;
  if (!category && !weather) {
      items = await db.returnAllItems();
  } else {
      let filters = { category, weather };
      items = await db.returnFilters(filters);
  }

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

 async function deleteInventoryItem(req, res) {
  const id = req.params.id
  
  try {
    await db.deleteItem(id);
  } catch {
    return res.status(500).send("Error deleting item.")
  }
  res.redirect('/');
 }


module.exports = {
    rFiltered,
    postInventory,
    deleteInventoryItem
}