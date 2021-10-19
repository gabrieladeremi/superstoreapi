const ProductCategory = require('../model/product_category');

const addProductCategory = async (req, res) => {

    try {

        const { category } = req.body;

        if(! await ProductCategory.findOne({ category })) {

            const newCategory = new ProductCategory({ category: category });

            await newCategory.save();

            return res.status(201).json({
                message: `Category Added Successfully`,
                category: newCategory.category
            });
        }
        else {

            return res.status(400).send(`Category already exist`);
        }

        
    } catch (error) {

        return res.send(error);
    }
}

module.exports = {

    addProductCategory
}