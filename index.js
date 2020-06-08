require('express-async-errors')
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const multer = require('multer');

dotenv.config();

let connection_config = {
    port: process.env.PORT,
    database_url: process.env.MONGODB_URI
}

if( process.env.NODE_ENV == 'development'){
    connection_config.port = 3000;
    connection_config.database_url = process.env.DATABASE_URL
    
}

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

const fileRoutes = require("./routes/files");


app.use('/api/v1/file', fileRoutes);



app.use((error, req, res, next) => {
    //console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;

    res.status(status).json({
        message: message,
        statusCode: status
    });
});

mongoose.connect( connection_config.database_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).then( connection => {
    app.listen(connection_config.port, () => {
        console.log('Server running at ' + connection_config.port);
    });
}).catch( err => {
    throw err;
})