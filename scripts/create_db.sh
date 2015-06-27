#!/bin/bash
echo "--> Clearing old data if exits"
dropdb --if-exists coalsce
echo "--> Creating DataBase ..."
createdb coalsce
echo "--> Created DataBase."
echo "--> Creating Tables ..."
psql coalsce -c "CREATE SEQUENCE org_id MINVALUE 1111"
psql coalsce -c "CREATE TABLE organisations(
	id integer PRIMARY KEY default nextval('org_id'),
	name varchar(30))"
echo "--> Created All Tables Needed."