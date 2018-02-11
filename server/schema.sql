-- DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int not null auto_increment,
  userid int not null,
  text varchar(200) not null,
  roomname varchar(20),
  primary key (id)
);

CREATE TABLE users (
  id int not null auto_increment, 
  username varchar(40 not null, 
  primary key (id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

