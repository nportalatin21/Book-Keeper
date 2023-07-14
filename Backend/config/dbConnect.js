// const mongoose = require('mongoose');

// const dbConnect = () => {
//   //connect DB
//   mongoose
//     .connect(process.env.MONGODB_URL, {
//       useFindAndModify: true,
//       useUnifiedTopology: true,
//       //useCreateIndex: true,
//       useNewUrlParser: true,
//     })
//     .then(() => console.log('Db Connected'))
//     .catch(err => console.log(err));
// };

// module.exports = dbConnect;



const mongoose = require('mongoose');

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // Remove the useFindAndModify option
      // useFindAndModify: false,
    })
    .then(() => console.log('Db Connected'))
    .catch((err) => console.log(err));
};

module.exports = dbConnect;



// const mongoose = require('mongoose');

// const dbConnect = () => {
//   mongoose
//     .connect(process.env.MONGODB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     })
//     .then(() => console.log('Database connected'))
//     .catch((error) => console.log(error));
// };

// module.exports = dbConnect;
