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
  ('Saucony Guide', 'Mens Shoe', '99.99', 'All', 'Moderate stability trainer'),
  ('Racer Half Tights', 'Mens Apparel', '59.99', 'All', 'Great for a training days');
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