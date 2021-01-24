const Product = require('../../db').Product
const route = require('express').Router()

route.get('/',(req,res)=>
{
    Product.findAll()
    .then((products)=>
    {
    res.status(200).send(products)
    })
    .catch((err)=>
    {
        res.status(500).send({error : "could not get any products"})
    })
})

route.post('/',(req,res) =>
{ 
    if(isNaN(req.body.price))
    {
        return res.status(403).send({  //403 --> server is understood the request but refused to fullfilled
            error : "price is not valid number"
        })
    }
    Product.create({
        name : req.body.name,
        manufacturer : req.body.manufacturer,
        price : req.body.price
    })
    .then((product)=>
    {
     res.status(201).send(product) 
    })
    .catch((err)=>
    {
     res.status(501).send("could not create a product")
    })
})


exports = module.exports = route   //single class ko {} me nahi rhakna hai