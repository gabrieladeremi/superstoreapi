const Product = require('../model/product');

const createProduct = async ( req, res ) => {

    try {

        const { name, price, category } = req.body;

        if (name, price) {

            const product =  new Product({
                name,
                price,
                category
            })
        }
        
    } catch (error) {
        
    }
}

module.exports = { createProduct };