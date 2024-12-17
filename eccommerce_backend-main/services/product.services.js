const db = require("../db/db");
const dbProduct = db.Product;

async function Add(req, res) {
    
    

    let newProduct = {
        userId:req.body.userId,
        name: req.body.name,
        title: req.body.title,
        category: req.body.category,
        brand: req.body.brand,
        color: req.body.color,
        size: req.body.size,
        quatity: req.body.quatity,
        price: req.body.price,
        discount: req.body.discount,
        discount_price: req.body.discount_price,
        description: req.body.description,
        image: req.body.image

    }
    const result = (await new dbProduct(newProduct).save());
    const data = {
        responseCode: 1,
        result:result
    }
    return (data)
}


async function Get(filters = {}, sort = {}) {
    try {
        const query = {};
        if (filters.color) {
            query.color = filters.color;
        }
        if (filters.size) {
            query.size = filters.size;
        }
        const sortOptions = {};
        if (sort.field && sort.order) {
            sortOptions[sort.field] = sort.order === 'desc' ? -1 : 1;
        }
        const allProducts = await dbProduct.find(query).sort(sortOptions).populate('userId');
        return allProducts;
    } catch (err) {
        throw new Error('Error fetching products: ' + err.message);
    }
}



async function getOne(req,res){
    const productinfo = await dbProduct.findOne({_id:req.params.id}).populate('userId').populate('category');
    return(productinfo);
    
}


module.exports={
    Add,
    Get,
    getOne
}