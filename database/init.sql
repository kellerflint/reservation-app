CREATE TABLE IF NOT EXISTS `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(255) NOT NULL,
  `lastName` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `users` (`firstName`, `lastName`) VALUES ('John', 'Doe');