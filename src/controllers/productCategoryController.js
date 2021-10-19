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

const getAllCategory = async (req, res) => {

    try {

        const allCategory = await ProductCategory.find();

        if( !allCategory ) return res.status(404).send(`No Category Found`);
        
        return res.status(200).send(allCategory);

        
        
    } catch (error) {
        
    }
}

module.exports = {

    addProductCategory,
    getAllCategory
}