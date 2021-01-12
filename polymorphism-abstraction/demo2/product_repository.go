package main

import (
	mgo "gopkg.in/mgo.v2"
)

// ProductRepository struct
type ProductRepository struct {
	db         *mgo.Database
	collection string
}

// NewProductRepository function
func NewProductRepository(db *mgo.Database, collection string) *ProductRepository {
	return &ProductRepository{db: db, collection: collection}
}

// Save product
func (r *ProductRepository) Save(p *Product) (*Product, error) {
	err := r.db.C(r.collection).Insert(p)
	if err != nil {
		return nil, err
	}
	return p, err
}

// FindAll product
func (r *ProductRepository) FindAll() ([]Product, error) {
	var products []Product

	err := r.db.C(r.collection).Find(nil).All(&products)
	if err != nil {
		return nil, err
	}

	return products, nil
}
