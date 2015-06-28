#!/bin/bash
echo "--> Clearing old data if exits"
dropdb --if-exists coalsce
echo "--> Creating DataBase ..."
createdb organisations
echo "--> Created DataBase."
echo "--> Creating Tables ..."
psql coalsce -c "CREATE SEQUENCE org_id MINVALUE 1111"
psql coalsce -c "CREATE TABLE organisations(
	email varchar(254) PRIMARY KEY,
	name varchar(30)) UNIQUE"
echo "--> Created All Tables Needed."