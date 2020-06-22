'use strict'
const Product = require('../models/product');

function getProducts(request, response) {
    console.log('Get:  /api/product');
    Product.find( ( error, products ) => {
        if ( error ) {
            console.log(error);
            response.status(500).send(
                {
                    success: false,
                    message: "Error al consultar los productos",
                    error: error
                }
            );
        }
        if ( ! products ) {
            console.log('Error,products not found')
            return response.status(404).send(
                {
                    success: false,
                    message: 'No hay productos creados'
                }
            );
        }
        console.log('Get products Ok')
        return response.status(200).send(
            {
                success: true,
                data: products,
                message: 'Lista de productos devuelta con éxito'
            }
        );
    });
}

function getProduct(request, response) {
    console.log('get: api/product/:id');
    let id = request.params.id;

    if ( ! id.match(/^[0-9a-fA-F]{24}$/)) {
        console.log('get fail, bad id');
        return response.status(422).send(
            {
                success: false,
                message: "El identificador del producto a consultar no es válido",
                error: ''
            }
        );
    }

    Product.findById(id , ( error, product ) => {
        if ( error ) {
            console.log(error);
            return response.status(500).send(
                {
                    success: false,
                    message: "Error al realizar la búsqueda",
                    error: error
                }
            );
        }
        if ( ! product ) {
            console.log('get fail, product not found');
            return response.status(404).send(
                {
                    success: false,
                    message: "Producto no encontrado",
                    error: error
                }
            );
        }
        console.log('get OK');
        return response.status(200).send(
            {
                success: true,
                data: product,
                message: "Producto encontrado",
            }
        );
    });
}

function createProduct(request, response) {
    console.log('post: api/product');
    const data = request.body;
    let product = new Product();
    product.name = data.name ;
    product.picture = data.picture;
    product.price = data.price;
    product.category = data.category;
    product.description = data. description;

    product.save( ( error , createdEntity ) => {
        if ( error ) {
            console.log(error);
            response.status(500).send(
                {
                    success: false,
                    message: "Error al crear el producto",
                    error: error
                }
            );
        }

        response.status(201).send(
            {
                success: true,
                data: createdEntity,
                message: "Producto creado con éxito"
            }
        );
            
    });
    console.log('Entity product created successfully');

}

function updateProduct(request, response) {
    console.log('put: api/product');
    const data = request.body;
    let id = request.params.id;

    if ( ! id.match(/^[0-9a-fA-F]{24}$/)) {
        console.log('get fail, bad id');
        return response.status(422).send(
            {
                success: false,
                message: "El identificador del producto a consultar no es válido",
                error: ''
            }
        );
    }

    Product.findByIdAndUpdate(id , data, ( error, product ) => {
        if ( error ) {
            console.log(error);
            return response.status(500).send(
                {
                    success: false,
                    message: "Error al realizar la búsqueda",
                    error: error
                }
            );
        }
        if ( ! product ) {
            console.log('update fail, product not found');
            return response.status(404).send(
                {
                    success: false,
                    message: "Producto no encontrado",
                    error: error
                }
            );
        }
        console.log('update Ok');
        return response.status(200).send(
            {
                success: true,
                data: product,
                message: "Producto actualizado",
            }
        );
    });
}

function deleteProduct(request, response) {
    console.log('delete: api/product');
    let id = request.params.id;
    if ( ! id.match(/^[0-9a-fA-F]{24}$/)) {
        console.log('get fail, bad id');
        return response.status(422).send(
            {
                success: false,
                message: "El identificador del producto a consultar no es válido",
                error: ''
            }
        );
    }

    Product.findById(id , ( error, product ) => {
        if ( error ) {
            console.log(error);
            return response.status(500).send(
                {
                    success: false,
                    message: "Error al borrar el producto",
                    error: error
                }
            );
        }
        if ( ! product ) {
            console.log('delete, product not found');
            return response.status(404).send(
                {
                    success: false,
                    message: "Producto no encontrado",
                    error: error
                }
            );
        }
        product.remove( ( error ) => {
            if ( error ) {
                console.log(error);
                return response.status(500).send(
                    {
                        success: false,
                        message: "Error al borrar el producto",
                        error: error
                    }
                );
            }
            console.log('Delete Ok');
            return response.status(200).send(
                {
                    success: true,
                    message: "Producto borrado con éxito"
                }
            );
        });
    });
}

module.exports = {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}