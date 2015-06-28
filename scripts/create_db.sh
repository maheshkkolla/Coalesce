#!/bin/bash
echo "--> Clearing old data if exits"
dropdb --if-exists organisations
echo "--> Creating DataBase ..."
createdb organisations
echo "--> Created DataBase."
echo "--> Creating Tables ..."
psql organisations -c "CREATE TABLE organisations(
	email varchar(254) PRIMARY KEY,
	name varchar(30),
	site_name varchar(30) UNIQUE)"
echo "--> Created All Tables Needed."
