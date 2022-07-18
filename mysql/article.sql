CREATE TABLE `article` (
	`aid` TEXT(10) NOT NULL,
	`title` TEXT(100) NOT NULL,
	`date` INT(10) NOT NULL,
	`subject` TEXT(50) NOT NULL,
	`author_id` TEXT(10) NOT NULL,
	`context` TEXT(50000) NOT NULL
);