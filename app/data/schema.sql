CREATE DATABASE hot_restaurant_db;
USE hot_restaurant_db;

CREATE TABLE tables
(
	id int NOT NULL AUTO_INCREMENT,
	customerName varchar(255) NOT NULL,
     customerEmail varchar(40) NOT NULL,
     customerID varchar(20) NOT NULL UNIQUE,
	phoneNumber varchar(10) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE waiting_list
(
     id int NOT NULL AUTO_INCREMENT,
	customerName varchar(255) NOT NULL,
     customerEmail varchar(40) NOT NULL,
     customerID varchar(20) NOT NULL UNIQUE,
	phoneNumber varchar(10) NOT NULL,
	PRIMARY KEY (id)
);

-- Note, you could use phone_num BIGINT NOT NULL to hold the phone numbers, that would allow numbers as larger as some phone numbers.  Note that we will never have to perform arithmetic on phone numbers, so INT is not necessary.  Note that INT(10) is NOT a 10 digit number, it is something else.  See: http://stackoverflow.com/questions/24353778/which-is-best-data-type-for-phone-number-in-mysql-and-what-should-java-type-mapp
