DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;
USE bamazon;

CREATE TABLE products (
  position INT NOT NULL AUTO_INCREMENT,
  item_id INT NOT NULL,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT,
  UNIQUE (item_id),
  PRIMARY KEY (position)
);

SELECT * FROM products;


INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES
  (2500, "Woman's black flip flops", "Clothing", 15.00, 100),
  (3500, "Men's brown loafers", "Clothing", 50.00, 75),
  (1000, "Velvet rolledback accent chair", "Furniture", 150.00, 25),
  (1500, "Black futon sofa", "Furniture", 130.00, 15),
  (1230, "Mr. Coffee 12 cup coffee maker", "Kitchen and dining", 40.00, 20),
  (1270, "KitchenAid professional mixer", "Kitchen and dining", 400.00, 10),
  (2105, "Apple air pods with charging case", "Electronics", 200.00, 15),
  (4300, "LG 65inch 4K ultra HD smart LED TV", "Electronics", 600.00, 5),
  (4994, "Schwinn woman's mountain bike", "Sports and fitness", 300.00, 7),
  (4708, "Schwinn men's mountain bike", "Sports and fitness", 300.00, 5);