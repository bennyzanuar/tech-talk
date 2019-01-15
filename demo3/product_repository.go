package main

// ProductRepository interface
type ProductRepository interface {
	Save(*Product) (*Product, error)
	FindAll() ([]Product, error)
}
