package main

import (
	"sync"
)

// ProductRepositoryInMem struct
type ProductRepositoryInMem struct {
	db map[string]*Product
	sync.RWMutex
}

// NewProductRepositoryInMem function
func NewProductRepositoryInMem(db map[string]*Product) *ProductRepositoryInMem {
	return &ProductRepositoryInMem{db: db}
}

// Save product
func (r *ProductRepositoryInMem) Save(p *Product) (*Product, error) {
	r.Lock()
	r.db[p.ID] = p
	r.Unlock()
	return p, nil
}

// FindAll product
func (r *ProductRepositoryInMem) FindAll() ([]Product, error) {
	var products []Product

	for _, product := range r.db {
		products = append(products, *product)
	}

	return products, nil
}
