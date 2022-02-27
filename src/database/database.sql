

//// lista de productos
CREATE DATABASE products;

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    price FLOAT,
    stock INT,
    description TEXT

);

///////////lista de usuarios

CREATE TABLE users(
    
    user_id SERIAL PRIMARY KEY,
    user_name TEXT ,
    user_email TEXT UNIQUE,
    user_password TEXT 
);   
