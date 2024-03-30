// const mongoose = require('mongoose');
// const request = require('supertest');

// const app = require('../app');
// const Product = require('../models/product.model');

// require('dotenv').config();

// describe("GET /api/products", () => {
//   it("should return all products", async () => {
//     const res = await request(app).get('/api/products');
//     expect(res.statusCode).toBe(200);
//     expect(res.body.data.length).toBeGreaterThan(0);
//   });
// });

// describe("GET /api/products/:id", () => {
//     it("should return a product by id", async () => {
//       const newProduct = new Product({
//         product: "Test Product",
//         cost: 20,
//         description: "Description of the test product",
//         quantity: 50
//       });
//       await newProduct.save();
  
//       const res = await request(app).get(`/api/products/${newProduct._id}`);
//       expect(res.statusCode).toBe(200);
//       expect(res.body.data.product).toBe(newProduct.product);
//       expect(res.body.data.cost).toBe(newProduct.cost);
//       expect(res.body.data.description).toBe(newProduct.description);
//       expect(res.body.data.quantity).toBe(newProduct.quantity);
//     });
// });
  
// describe("POST /api/products", () => {
//     it("should create a new product", async () => {
//       const newProductData = {
//         product: "New Product",
//         cost: 10,
//         description: "Description of the new product",
//         quantity: 100
//       };
  
//       const res = await request(app)
//         .post('/api/products')
//         .send(newProductData);
  
//       expect(res.statusCode).toBe(200);
//       expect(res.body.data.product).toBe(newProductData.product);
//       expect(res.body.data.cost).toBe(newProductData.cost);
//       expect(res.body.data.description).toBe(newProductData.description);
//       expect(res.body.data.quantity).toBe(newProductData.quantity);
//     });
// });
  
// describe("PUT /api/products/:id", () => {
//     it("should update a product", async () => {
//       const newProduct = new Product({
//         product: "Test Product",
//         cost: 20,
//         description: "Description of the test product",
//         quantity: 50
//       });
//       await newProduct.save();
  
//       const updatedProductData = {
//         product: "Updated Product",
//         cost: 30,
//         description: "Updated description",
//         quantity: 60
//       };
  
//       const res = await request(app)
//         .put(`/api/products/${newProduct._id}`)
//         .send(updatedProductData);
  
//       expect(res.statusCode).toBe(200);
//       expect(res.body.data.product).toBe(updatedProductData.product);
//       expect(res.body.data.cost).toBe(updatedProductData.cost);
//       expect(res.body.data.description).toBe(updatedProductData.description);
//       expect(res.body.data.quantity).toBe(updatedProductData.quantity);
//     });
// });
  
// describe("DELETE /api/products/:id", () => {
//     it("should delete a product", async () => {
//         const newProduct = new Product({
//         product: "Test Product",
//         cost: 20,
//         description: "Description of the test product",
//         quantity: 50
//         });
//         await newProduct.save();

//         const res = await request(app).delete(`/api/products/${newProduct._id}`);
//         expect(res.statusCode).toBe(200);

//         const deletedProduct = await Product.findById(newProduct._id);
//         expect(deletedProduct).toBeNull();
//     });
// });
  
