const User = require('../../db').User   //to intereact with the User class in our db file
const route = require('express').Router()

route.get('/',(req,res)=>    //to fetch the data
{
    //we want to send the users from our database to frontend
    User.findAll()
    .then((users)=>
    {
     res.status(200).send(users)
    }).catch((err) =>
    {
     res.status(500).send({error : "couldnot get any user"})
    })
})

route.post('/',(req,res)=>
{
    //we expect the request to have a name init
    User.create({
        name : req.body.name
    }).then((user)=>
    {
        res.status(201).send(user)  //(201 fullfilled)a new resource being created there
    })
    .catch((err)=>
    {
        res.status(501).send("could not create a new user")  //(501) not implemented http coder
    })
})

exports = module.exports = route