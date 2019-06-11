DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;
USE bamazon;

CREATE TABLE products (
  position INT AUTO_INCREMENT NOT NULL,
  item_id INT NOT NULL,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT,
  UNIQUE (item_id),
  PRIMARY KEY (position)
);