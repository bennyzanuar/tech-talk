package main

import "testing"

func TestProductDomain(t *testing.T) {
	t.Run("negative test", func(t *testing.T) {
		p := Product{ID: "1", Name: "aaaaaaaaaaaaaaaa", Quantity: 2}

		err := p.ValidateName()

		if err == nil {
			t.Error("test product fail")
		}
	})

	t.Run("positive test", func(t *testing.T) {
		p := Product{ID: "1", Name: "aa", Quantity: 2}

		err := p.ValidateName()

		if err != nil {
			t.Error("test product fail")
		}
	})
}
