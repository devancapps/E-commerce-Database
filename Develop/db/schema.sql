-- schema.sql

-- Drop existing tables
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS ProductTag;
DROP TABLE IF EXISTS Tag;
DROP TABLE IF EXISTS Product;
DROP TABLE IF EXISTS Category;
SET FOREIGN_KEY_CHECKS = 1;

-- Create Category table
CREATE TABLE Category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

-- Create Product table
CREATE TABLE Product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INT DEFAULT 10 NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES Category(id)
);

-- Create Tag table
CREATE TABLE Tag (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(255)
);

-- Create ProductTag table
CREATE TABLE ProductTag (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    tag_id INT,
    FOREIGN KEY (product_id) REFERENCES Product(id),
    FOREIGN KEY (tag_id) REFERENCES Tag(id)
);
