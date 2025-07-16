const pool = require('./pool');

//return all items
async function returnAllItems() {
  const { rows } = await pool.query("SELECT * FROM running_inventory");
  return rows;
}

module.exports = {
  returnAllItems,
};