package main

import (
	"testing"
)

func TestHandler(t *testing.T) {

	productRepository := NewProductRepositoryMock()
	handler, _ := NewHandler(productRepository)

	t.Run("Should success save product", func(t *testing.T) {
		asusZenfone := &Product{
			ID:       "P1",
			Name:     "Asus Zenfone",
			Quantity: 1,
		}

		p, err := handler.SaveProduct(asusZenfone)

		if err != nil {
			t.Error(err)
		}

		expectedProductName := "Asus Zenfone"

		if p.Name != expectedProductName {
			t.Errorf("product is not equal %s", expectedProductName)
		}

	})

	t.Run("Should success get all product", func(t *testing.T) {
		products, err := handler.GetAllProduct()

		if err != nil {
			t.Error(err)
		}

		if len(products) <= 0 {
			t.Error("products not found")
		}
	})
}
