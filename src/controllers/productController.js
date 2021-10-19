const Product = require('../model/product');
const ProductCategory =  require('../model/product_category');

const createProduct = async ( req, res ) => {

    try {

        const { name, price, category } = req.body;
      
        if (name, price) {

            const product =  await new Product({
                name,
                price,
                category
            })

            console.log('product',product);

            const proCategory = await ProductCategory.findById(category);

            proCategory.products.push(product);

            await proCategory.save();

            await product.save();

            return res.status(201).json({
                message: "Product saved successfully",
                product,
            });

        } else {

            return res.status(400).send('Product Not Saved');
        }
        
    } catch (error) {

        return res.send(error);
    }
}

const allProducts = async ( req, res ) => {

    try {

        const availableProducts = await Product.find().populate('category').lean();

        if( !availableProducts ) return res.status(404).send(`No Product Found`);

        return res.status(200).send(availableProducts);  
        
    } catch (error) {
        
        return res.send(error)

    }
}

module.exports = { createProduct, allProducts };