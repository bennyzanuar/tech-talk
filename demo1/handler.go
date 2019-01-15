package main

import (
	"os"

	mgo "gopkg.in/mgo.v2"
)

// Handler struct
type Handler struct {
	db         *mgo.Database
	collection string
}

// NewHandler Handler's constructor
func NewHandler() (*Handler, error) {

	host := os.Getenv("MONGO_DB_HOST")
	dbName := os.Getenv("MONGO_DB_NAME")

	session, err := mgo.Dial(host)

	if err != nil {
		return nil, err
	}

	db := session.DB(dbName)

	collection := "products"

	return &Handler{db: db, collection: collection}, nil
}

// SaveProduct product
func (h *Handler) SaveProduct(p *Product) (*Product, error) {
	err := h.db.C(h.collection).Insert(p)
	if err != nil {
		return nil, err
	}
	return p, err
}

// GetAllProduct product
func (h *Handler) GetAllProduct() ([]Product, error) {
	var products []Product

	err := h.db.C(h.collection).Find(nil).All(&products)
	if err != nil {
		return nil, err
	}

	return products, nil
}
