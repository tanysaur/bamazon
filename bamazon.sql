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
      (2, "DVD", "Media", 7.00, 100);

-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, stock_qty) 
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
