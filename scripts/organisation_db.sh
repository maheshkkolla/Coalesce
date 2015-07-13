#!/bin/bash
echo "--> Clearing old data if exits"
dropdb --if-exists coalsce
echo "--> Creating DataBase ..."
createdb coalsce
echo "--> Created DataBase."
echo "--> Creating Tables ..."
psql coalsce -c "CREATE TABLE users(
	email varchar(254) PRIMARY KEY,
	name varchar(30),
	password varchar(30))"
echo "--> Created All Tables Needed."
