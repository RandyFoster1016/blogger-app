DROP DATABASE IF EXISTS blogdb;

CREATE DATABASE blogdb;

\c blogdb

CREATE TABLE blogs
(
    id int,
    title varchar,
    image varchar,
    post text null,
    category varchar
);