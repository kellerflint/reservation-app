-- CREATE DATABASE reservations;

USE reservations;

DROP TABLE IF EXISTS users;
CREATE TABLE users(
	id INT AUTO_INCREMENT,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    timestamp DATETIME DEFAULT NOW(),
    
    PRIMARY KEY (id)
);

INSERT INTO users (firstName, lastName) VALUES ('John', 'Doe');