#!/bin/bash
echo "--> Clearing old data if exits"
dropdb --if-exists coalsce
echo "--> Creating DataBase ..."
createdb coalsce
echo "--> Created DataBase."
echo "--> Creating Tables ..."
psql coalsce -c "CREATE SEQUENCE user_id MINVALUE 1111"
psql coalsce -c "CREATE TABLE users(
	id integer PRIMARY KEY default nextval('user_id'),
	email varchar(50),
	name varchar(30),
	password varchar(100))"
echo "--> Created All Tables Needed."