package main

import (
	mgo "gopkg.in/mgo.v2"
)

// ProductRepositoryMongoDB struct
type ProductRepositoryMongoDB struct {
	db         *mgo.Database
	collection string
}

// NewProductRepositoryMongoDB function
func NewProductRepositoryMongoDB(db *mgo.Database, collection string) *ProductRepositoryMongoDB {
	return &ProductRepositoryMongoDB{db: db, collection: collection}
}

// Save product
func (r *ProductRepositoryMongoDB) Save(p *Product) (*Product, error) {
	err := r.db.C(r.collection).Insert(p)
	if err != nil {
		return nil, err
	}
	return p, err
}

// FindAll product
func (r *ProductRepositoryMongoDB) FindAll() ([]Product, error) {
	var products []Product

	err := r.db.C(r.collection).Find(nil).All(&products)
	if err != nil {
		return nil, err
	}

	return products, nil
}
