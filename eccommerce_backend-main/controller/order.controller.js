const express = require('express')

const router = express.Router()

const db = require("../db/db")

const dbOrder = db.Order
// ...............new order..................
try {
    router.post("/neworder", (req, res) => {
        const { newOrder } = req.body
        dbOrder(newOrder).save().then((response) => {
            res.send({
                result: response,
                responseCode: 1
            })
        })

    })
} catch (error) {
    res.send(error)
}
//....................order history..............

router.post("/history", async (req, res) => {
    try {
        const { user, page, limit = 5 } = req.body;
        const skip = (page - 1) * limit;
        const result = await dbOrder.find({ user })
            .skip(skip)
            .limit(parseInt(limit))
            .populate("user")
            .populate("shippingAddress")
            .populate({
                path: 'orderitem',
                populate: [{ path: 'product' }]
            });
        const totalCount = await dbOrder.countDocuments({ user });
        const data = {
            result,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(totalCount / limit),
                totalItems: totalCount
            },
            responseCode: 1
        };
        res.send(data);
    } catch (error) {
        res.status(500).send({
            error: error.message,
            responseCode: 0
        });
    }
});


try {
    router.post("/all_orders", async (req, res) => {

        let result = await dbOrder.find(req.body).populate("user").populate("orderitem").populate("shippingAddress")
        let data = {
            result,
            responseCode: 1
        }
        res.send(result)
    })
} catch (error) {
    res.send(error)
}



module.exports = router
