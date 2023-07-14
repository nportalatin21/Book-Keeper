const express = require('express');
const userRoute = express.Router()
const User = require('../models/User')

// const usersRoute = express.Router();
//register
userRoute.post('/register', async (req,res) =>
{
    
        try {
          const {name, email, password} = req.body;
          const user = await User.create({name, email, password})
        console.log(user);

            res.send(user)
        }catch (error) {
            console.log(error)
        }
    
});

//Login
userRoute.post('/api/users/login', (req,res) =>{
    res.send('login route') 
    
    });


//Update User    
userRoute.put('/api/users/update', (req,res) =>{
    res.send('Update route') 
        
 });


 //Delete User ends with :id to make use of it being dynamic 
userRoute.delete('/api/users/:id', (req,res) =>{
    res.send('Delete route') 
    
    });


//fetch users

userRoute.get('/api/users', (req,res) =>{
    res.send('Fetch route') 
    
    });
    


module.exports = userRoute;