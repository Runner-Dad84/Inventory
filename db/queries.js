const pool = require('./pool');

//return all items
async function returnAllItems() {
  const { rows } = await pool.query("SELECT * FROM running_inventory");
  return rows;
}

//add item
async function postItem (name, type, price, weather, description) {
    query = 'INSERT INTO running_inventory (name, type, price, weather, description) VALUES ($1, $2, $3, $4, $5)';
    await pool.query (query, [name, type, price, weather, description]);
}

//Take any sized array of categories and return those categories
async function returnCategories (categoryArray) {
  const placeholders = categoryArray.map((__, i) => `$${i + 1}`.join(', '));
  const { row } = await pool.query(`SELECT * FROM running_inventory WHERE type IN ${placeholders}`, categoryArray);

}

module.exports = {
  returnAllItems,
  postItem,
  returnCategories
};