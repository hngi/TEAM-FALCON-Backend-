const mongoose = require('mongoose');
const uri = 'mongodb+srv://boluakins:%40Akinsola1@cluster0-wounk.mongodb.net/general?retryWrites=true&w=majority'

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};

function initializeDB() {
  return mongoose.connect(uri, options)
    .then(() => console.log(':: Connected to database'))
    .catch(error => console.log(":: Couldn't connect to database ", error));
};

module.exports = initializeDB