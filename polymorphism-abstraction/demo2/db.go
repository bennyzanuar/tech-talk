package main

import (
	"os"

	mgo "gopkg.in/mgo.v2"
)

// GetDB function
func GetDB() (*mgo.Database, error) {
	host := os.Getenv("MONGO_DB_HOST")
	dbName := os.Getenv("MONGO_DB_NAME")

	session, err := mgo.Dial(host)

	if err != nil {
		return nil, err
	}

	db := session.DB(dbName)
	return db, nil
}
