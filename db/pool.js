const { Pool } = require('pg');

const pool = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "runnerdad84",
  database: "running_inventory",
  password: "Scarborough-02!",
  port: 5432 // The default port
});

module.exports = pool;