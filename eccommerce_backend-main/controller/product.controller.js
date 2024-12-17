const express = require('express')

const router = express.Router()

const productService = require('../services/product.services');


router.post("/add", function save(req, res) {

    productService.Add(req, res).then((response) => {
        res.send(response)

    }).catch((err) => { res.send(err) })
})

router.get('/allproduct', async (req, res) => {
    try {
        const { color, size, sortBy, sortOrder } = req.query;
        const filters = {};
        if (color) {
            filters.color = color;
        }
        if (size) {
            filters.size = size;
        }
        const sort = {};
        if (sortBy) {
            sort.field = sortBy;
            sort.order = sortOrder === 'desc' ? 'desc' : 'asc'; 
        }
        const response = await productService.Get(filters, sort);
        res.send(response);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

router.get('/productinfo/:id', ((req, res) => {
    productService.getOne(req, res).then((response) => {
        res.send(response)
    }).catch((err) => {
        res.send(err);
    })
}))


module.exports = router
