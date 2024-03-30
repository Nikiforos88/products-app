const m2s = require('mongoose-to-swagger');
const User = require('./models/user.model');
const Product = require('./models/product.model');

exports.options = {
    "components" : {
        "schemas": {
            User: m2s(User),
            Product: m2s(Product),
        }
    },
    "openapi": "3.1.0",
    "info": {
        "version": "1.0.0",
        "title": "Products and Users CRUD API",
        "description": "Products and Users project application",
        "contact": {
            "name": "API Support",
            "url": "http://www.example.com",
            "email": "support@example.com"
        }
    },
    "servers": [
        {
            url: "http://localhost:4000",
            description: 'Local Server'
        },
        {
            url: 'http://www.example.com',
            description: "Testing server"
        }
    ],
    "tags": [
        {
            "name": "Users",
            "description": "API endpoints for users"
        },
        {
            "name": "Products",
            "description": "API endpoints for products"
        }
    ],
    "paths": {
        "/api/users": {
            "get": {
                "tags": ["Users"],
                "description": "Get all users",
                "responses": {
                    "200": {
                        "description": "A list of users",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/User"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": ["Users"],
                "description": "Create a new user",
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/User"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "New user created"
                    }
                }
            }
        },
        "/api/users/{username}": {
            "get": {
                "tags": ["Users"],
                "description": "Get a user by username",
                "parameters": [
                    {
                        "name": "username",
                        "in": "path",
                        "required": true,
                        "description": "Username of the user to retrieve",
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "User retrieved successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/User"
                                }
                            }
                        }
                    }
                }
            },
            "patch": {
                "tags": ["Users"],
                "description": "Update a user by username",
                "parameters": [
                    {
                        "name": "username",
                        "in": "path",
                        "required": true,
                        "description": "Username of the user to update",
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/User"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "User updated successfully"
                    }
                }
            },
            "delete": {
                "tags": ["Users"],
                "description": "Delete a user by username",
                "parameters": [
                    {
                        "name": "username",
                        "in": "path",
                        "required": true,
                        "description": "Username of the user to delete",
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "User deleted successfully"
                    }
                }
            }
        },
        "/api/products": {
            "get": {
                "tags": ["Products"],
                "description": "Get all products",
                "responses": {
                    "200": {
                        "description": "A list of products",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Product"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": ["Products"],
                "description": "Create a new product",
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Product"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "New product created"
                    }
                }
            }
        },
        "/api/products/{id}": {
            "get": {
                "tags": ["Products"],
                "description": "Get a product by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID of the product to retrieve",
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Product retrieved successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Product"
                                }
                            }
                        }
                    }
                }
            },
            "put": {
                "tags": ["Products"],
                "description": "Update a product by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID of the product to update",
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Product"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Product updated successfully"
                    }
                }
            },
            "delete": {
                "tags": ["Products"],
                "description": "Delete a product by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID of the product to delete",
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Product deleted successfully"
                    }
                }
            }
        }
    }
};
