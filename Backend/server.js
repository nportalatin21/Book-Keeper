const express = require('express');
const mongoose = require('mongoose');
const dbConnect = require('./config/dbConnect');
const User = require('./models/User')
const userRoute = require('./routes/usersRoute')

const app = express();

// console.log(app)

//DB connect
dbConnect();


// Passing body data Middelware
// app.use(bodyParser.json()); // Parse JSON bodies
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());




// mongoose.connect('mongodb+srv://Nico:8OtNzfa1QNNJurZS@cluster0.c8rwyct.mongodb.net/?retryWrites=true&w=majority', {
//     useFindAndModify: true, 
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useNewUrlParser: true,

// }).then(() => console.log('db connected')).catch(err => console.log(err))

//Routes:
app.use('/api/users', userRoute);



    

    
//fetch users

app.get('/api/users', (req,res) =>{
    res.send('Fetch route') 
    
    });
    


//Server
const PORT = process.env.PORT || 5000

app.listen(5000, () => {
    console.log(`Server is up and running ${PORT}`)});