const pool = require('./pool');

//return all items
async function returnAllItems() {
  const { rows } = await pool.query("SELECT * FROM running_inventory");
  return rows;
}

//
async function postItem (name, type, price, weather, description) {
    query = 'INSERT INTO running_inventory (name, type, price, weather, description) VALUES ($1, $2, $3, $4, $5)';
    await pool.query (query, [name, type, price, weather, description]);

}

module.exports = {
  returnAllItems,
  postItem
};