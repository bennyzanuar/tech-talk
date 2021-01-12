package main

// ProductRepositoryMock struct
type ProductRepositoryMock struct {
}

// NewProductRepositoryMock function
func NewProductRepositoryMock() *ProductRepositoryMock {
	return &ProductRepositoryMock{}
}

// Save product
func (r *ProductRepositoryMock) Save(p *Product) (*Product, error) {
	return p, nil
}

// FindAll product
func (r *ProductRepositoryMock) FindAll() ([]Product, error) {
	var products []Product

	products = append(products, Product{ID: "P1", Name: "Nokia 6", Quantity: 3})
	products = append(products, Product{ID: "P2", Name: "Macbook PRO", Quantity: 1})

	return products, nil
}
