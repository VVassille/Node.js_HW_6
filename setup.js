import db from "./db.js";

const sql = `
    CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL
    )
`;

db.query(sql, (err, result) => {
  if (err) {
    console.error("Error creating table:", err.message);
    return;
  }

  console.log("Products table created successfully!");

  db.end();
});
