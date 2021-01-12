package main

import (
	"fmt"
	"os"
)

//MONGO_DB_HOST=mongodb://127.0.0.1:27017/backend_talk1 MONGO_DB_NAME=backend_talk1 go run main.go

func main() {

	// get db
	db, err := GetDB()

	//product collection name
	collection := "products"

	//construct product repository
	productRepository := NewProductRepositoryMongoDB(db, collection)

	//-----------------------

	// in memory db
	// db := make(map[string]*Product)
	// productRepository := NewProductRepositoryInMem(db)

	// // construct handler
	handler, err := NewHandler(productRepository)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	// p1 := &Product{
	// 	ID:       "P2",
	// 	Name:     "IPHONE X",
	// 	Quantity: 3,
	// }

	// newProd1, err := handler.SaveProduct(p1)
	// if err != nil {
	// 	fmt.Println(err)
	// 	os.Exit(1)
	// }

	// fmt.Println(newProd1)

	//=---------------------------

	products, err := handler.GetAllProduct()
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	for _, p := range products {
		fmt.Println(p)
	}
}
