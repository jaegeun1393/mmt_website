CREATE TABLE `accounts` (
	`id` TEXT(15) NOT NULL,
	`Fname` TEXT(25) NOT NULL,
	`Lname` TEXT(25) NOT NULL,
	`Role` TEXT(25) NOT NULL,
	`Pnumber` TEXT(25) NOT NULL,
	`Address` TEXT(100) NOT NULL,
	`Zip` TEXT(25) NOT NULL,
	`email` TEXT(100) NOT NULL,
	`password` TEXT(25) NOT NULL,
	`child` TEXT(1000) NOT NULL
);