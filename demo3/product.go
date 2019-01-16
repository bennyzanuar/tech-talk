package main

import "errors"

//Product struct
type Product struct {
	ID       string
	Name     string
	Quantity uint64
}

func (p *Product) ValidateName() error {
	if len(p.Name) > 10 {
		return errors.New("product name length cannot greater than 10")
	}

	return nil
}
