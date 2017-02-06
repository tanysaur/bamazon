CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  dept_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_qty INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, dept_name, price, stock_qty)
VALUES (1, "Banana", "Produce", 4.00, 100),
      (2, "Avocados", "Produce", 5.00, 50),
      (3, "Camera", "Electronics", 500.00, 10),
      (4, "Laptop", "Electronics", 1500.00, 3),
      (5, "Rice Cooker", "Electronics", 50.00, 10),
      (6, "Guitar", "Music", 700.00, 10),
      (7, "Drumset", "Music", 300.00, 5),
      (8, "Bicycle", "Sports", 300.00, 15),
      (9, "Longboard", "Sports", 200.00, 25),
      (10, "Tent", "Recreation", 300.00, 15);
