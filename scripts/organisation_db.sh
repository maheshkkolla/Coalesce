#!/bin/bash
echo "--> Clearing old data if exits"
dropdb --if-exists coalsce
echo "--> Creating DataBase ..."
createdb coalsce
echo "--> Created DataBase."
echo "--> Creating Tables ..."
psql coalsce -c "CREATE SEQUENCE usr_id"
psql coalsce -c "CREATE TABLE users(
	id integer PRIMARY KEY default nextval('usr_id'),
	email varchar(254) UNIQUE,
	name varchar(30),
	password varchar(30))"
psql coalsce -c "CREATE SEQUENCE msg_id"
psql coalsce -c "CREATE TABLE messages(
	id integer PRIMARY KEY default nextval('msg_id'),
	message text,
	sender integer references users(id),
	receiver integer references users(id),
	dt timestamp
	)"
echo "--> Created All Tables Needed."
