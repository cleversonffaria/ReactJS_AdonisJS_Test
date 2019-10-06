"use strict";
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
// Usuário
Route.post("/login", "UserController.login");
Route.post("/user", "UserController.create").validator("User");
Route.delete("/user/:id", "UserController.deleteUser").middleware(["auth"]);
Route.put("/user/:id", "UserController.updateUser").middleware(["auth"]);
// Produto
Route.post("/product", "ProductController.store").middleware(["auth"]);
Route.put("/product/:id", "ProductController.update").middleware(["auth"]);
Route.delete("/product/:id", "ProductController.destroy").middleware(["auth"]);
Route.resource("/product", "ProductController").apiOnly().except(["store", "update", "destroy"]);
// Empresa
Route.delete("/company", "CompanyController.destroy").middleware(["auth"]);
Route.post("/company", "CompanyController.store").middleware(["auth"]).validator("Company");
Route.get("/company", "CompanyController.index");
// Categoria
Route.get("/category", "CategoryController.index");
Route.delete("/category/:id", "CategoryController.destroy").middleware(["auth"]);
Route.post("/category", "CategoryController.store").validator("Category").middleware(["auth"]);
Route.put("/category/:id", "CategoryController.update").validator("Category").middleware(["auth"]);
// Sub-Categoria
Route.get("/subcategory", "SubcategoryController.index");
Route.delete("/subcategory/:id", "SubcategoryController.destroy").middleware(["auth"]);
Route.post("/subcategory", "SubcategoryController.store").validator("Subcategory").middleware(["auth"]);
Route.put("/subcategory/:id", "SubcategoryController.update").validator("Subcategory").middleware(["auth"]);
//Endereços
Route.post("/address", "AddressController.store").middleware(["auth"]);
Route.get("/address", "AddressController.index").middleware(["auth"]);
Route.put("/address", "AddressController.update").middleware(["auth"]);
Route.delete("/address", "AddressController.destroy").middleware(["auth"]);
//Profile
Route.post("/profile", "ProfileController.store").middleware(["auth"]);
Route.get("/profile", "ProfileController.index").middleware(["auth"]);
Route.put("/profile", "ProfileController.update").middleware(["auth"]);
Route.delete("/profile", "ProfileController.destroy").middleware(["auth"]);
//Pedidos
Route.put("/demand/:id", "DemandController.update").middleware(["auth"]);
Route.delete("/demand/:id", "DemandController.destroy").middleware(["auth"]);
Route.post("/demand/:id", "DemandController.store").middleware(["auth"]);
Route.get("/demand", "DemandController.index").middleware(["auth"]);
//Favorito
Route.delete("/favorite/:id", "FavoriteController.destroy").middleware(["auth"]);
Route.post("/favorite/:id", "FavoriteController.store").middleware(["auth"]);
Route.get("/favorite", "FavoriteController.index").middleware(["auth"]);
//imagens 
Route.post('/product/:id/image', 'ImageController.create').middleware(['auth'])
Route.delete('/image/:image', 'ImageController.destroy').middleware(['auth'])
Route.get('/images/:id', 'ImageController.index')