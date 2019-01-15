package main

// Handler struct
type Handler struct {
	productRepository ProductRepository
}

// NewHandler Handler's constructor
func NewHandler(productRepository ProductRepository) (*Handler, error) {
	return &Handler{productRepository}, nil
}

// SaveProduct product
func (h *Handler) SaveProduct(p *Product) (*Product, error) {
	newProduct, err := h.productRepository.Save(p)
	if err != nil {
		return nil, err
	}
	return newProduct, err
}

// GetAllProduct product
func (h *Handler) GetAllProduct() ([]Product, error) {
	return h.productRepository.FindAll()
}
