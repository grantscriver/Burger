DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

create table burgers
(
    id int not null
    auto_increment,
    burger_name varchar
    (50) not null,
    devoured boolean default false,
    primary key
    (id)
);




