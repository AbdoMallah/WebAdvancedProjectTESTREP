CREATE TABLE IF NOT EXISTS users(
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_firstname VARCHAR(50) NOT NULL,
    user_lastname VARCHAR(50) NOT NULL,
    user_mobile_number INT(15) NOT NULL,
    user_email VARCHAR(50) NOT NULL,
    user_password VARCHAR(50) NOT NULL,
    user_role INT(0) NOT NULL,
);

CREATE TABLE IF NOT EXISTS categories(
    category_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    catergory_name VARCHAR(100) NOT NULL,
);


CREATE TABLE IF NOT EXISTS items(
    item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    item_title VARCHAR(50) NOT NULL,
    item_description TEXT NOT NULL,
    item_image VARCHAR(100) NOT NULL,
    item_date DATE NOT NULL,
    item_price INT(8) NOT NULL,
    item_category_id INT NOT NULL,
    item_seller_id INT NOT NULL,
    item_status VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS orders(
    order_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_buyer_id INT NOT NULL,
    order_sent INT NOT NULL
)

