const pool = require('./pool');

//return all items
async function returnAllItems() {
  const { rows } = await pool.query("SELECT * FROM running_inventory");
  return rows;
}

//delete item
async function deleteItem (id){
  const { rows } = await pool.query ('DELETE FROM running_inventory WHERE id = $1', [id]);
  return rows;
}

//add item
async function postItem (name, type, price, weather, description) {
    query = 'INSERT INTO running_inventory (name, type, price, weather, description) VALUES ($1, $2, $3, $4, $5)';
    await pool.query (query, [name, type, price, weather, description]);
}

//Dynamic selections 
async function returnFilters (filter) {
  let parameters = [];
  let values = [];
  let counter = 1;
  

  if (filter.category && filter.category.length > 0){
    const categoryPlaceholders = filter.category.map(() => `$${counter++}`);
    parameters.push(`type IN (${categoryPlaceholders.join(', ')})`)
    values.push(...filter.category)
  }

  if (filter.weather && filter.weather.length > 0){
    const weatherPlaceholders = filter.weather.map(() => `$${counter++}`);
    parameters.push(`weather IN (${weatherPlaceholders.join(', ')})`)
    values.push(...filter.weather)
  }
  const where = parameters.length > 0 ? `WHERE ${parameters.join(' AND ')}` : '';
  const query = `SELECT * FROM running_inventory ${where}`;

  const { rows } = await pool.query(query, values);
  return rows;
}

module.exports = {
  returnAllItems,
  deleteItem,
  postItem,
  returnFilters
};