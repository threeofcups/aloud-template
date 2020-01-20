-- sudo -u postgres psql -f schema.sql

DROP DATABASE IF EXISTS aloud;
CREATE DATABASE aloud;
\c aloud;

CREATE TABLE users (
  id INT GENERATED ALWAYS AS IDENTITY,  
  bio TEXT,
  email VARCHAR(50) NOT NULL,
  username VARCHAR(50) NOT NULL,
  password CHAR(50),
  image_url TEXT,
  name_display VARCHAR(64),
  PRIMARY KEY (id)
);

/* working psql insertion
-- insert into users(bio, email, username, password, image_url, name_display)
-- values('punk-turned-pop-turned-experimental spacescapes', 'bjork@space.io', 'bjork575', 'babyGiraffe', 'https://bit.ly/2R9TPv9', 'bjork');

working psql query
-- select * from users where username = 'bjork575';
*/
