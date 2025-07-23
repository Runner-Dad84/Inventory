const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS running_inventory (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ), 
  type VARCHAR ( 255 ), 
  price NUMERIC (10, 2),
  weather VARCHAR ( 255 ), 
  description VARCHAR ( 255 )
);

INSERT INTO running_inventory (name, type, price, weather, description) 
VALUES
  ('Saucony Guide', 'Mens Shoes', '124.99', 'All Weather', 'Moderate stability trainer'),
  ('Saucony Guide', 'Womens Shoes', '124.99', 'All Weather', 'Moderate stability trainer'),
  ('Ride Guide', 'Mens Shoes', '109.99', 'All Weather', 'Neutral, light weight, responsive'),
  ('Ride Guide', 'Womens Shoes', '109.99', 'All Weather', 'Neutral, light weight, responsive'),
  ('Triumph', 'Mens Shoes', '119.99', 'All Weather', 'Neutral, cushioned, plush'),
  ('Triumph', 'Womens Shoes', '119.99', 'All Weather', 'Neutral, cushioned, plush'),
  ('Racer Half Tights', 'Mens Apparel', '59.99', 'Summer', 'Great for racing days'),
  ('Racer Half Tights', 'Womens Apparel', '59.99', 'Summer', 'Great for racing days'),
  ('Full Tights', 'Mens Apparel', '84.99', 'Winter', 'Great for training or racing days'),
  ('Full Tights', 'Womens Apparel', '84.99', 'Winter', 'Great for training or racing days'),
  ('Race Singlet', 'Mens Apparel', '54.99', 'All Weather', 'Great for training or racing days'),
  ('Race Singlet', 'Womens Apparel', '54.99', 'All Weather', 'Great for training or racing days');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://runnerdad84:Scarborough-02!@localhost:5432/running_inventory",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();