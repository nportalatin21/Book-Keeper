const mongoose = require('mongoose');

const dbConnect = () => {
  // Connect to the database
  mongoose.connect('mongodb+srv://Nico:8OtNzfa1QNNJurZS@cluster0.c8rwyct.mongodb.net/Book-Keeper', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    //useNewUrlParser: true,
  })
  .then(() => console.log('Database connected'))
  .catch(error => console.log('Error connecting to database:', error));
};

module.exports = dbConnect;
