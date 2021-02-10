DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS orders;

CREATE TABLE IF NOT EXISTS users(
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_username VARCHAR(50) NOT NULL,
    user_firstname VARCHAR(50) NOT NULL,
    user_lastname VARCHAR(50) NOT NULL,
    user_mobile_number INT NOT NULL,
    user_email VARCHAR(50) NOT NULL,
    user_password VARCHAR(50) NOT NULL,
    user_role INT NOT NULL
);
CREATE TABLE IF NOT EXISTS categories(
    category_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    catergory_name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS items(
    item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    item_title VARCHAR(50) NOT NULL,
    item_description VARCHAR(500) NOT NULL,
    item_image VARCHAR(100) NOT NULL,
    item_date DATE NOT NULL,
    item_price INT NOT NULL,
    item_category_id INT NOT NULL,
    item_seller_id INT NOT NULL,
    item_status VARCHAR NOT NULL,
    FOREIGN KEY (item_seller_id) REFERENCES users(user_id),
    FOREIGN KEY (item_category_id) REFERENCES categories(category_id)
);

CREATE TABLE IF NOT EXISTS orders(
    order_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_buyer_id INT NOT NULL,
    order_sent INT NOT NULL,
    FOREIGN KEY (order_buyer_id) REFERENCES users(user_id)
);

