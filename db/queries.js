const pool = require('./pool');

//return all comments
async function returnAllItems() {
  const { rows } = await pool.query("SELECT * FROM inventory");
  return rows;
}

module.exports = {
  returnAllItems,
};