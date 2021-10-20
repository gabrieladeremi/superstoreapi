// const { connect } =  require('mongoose');

// require("dotenv").config();

// const databaseConnection = async () => {

//     await connect(process.env.MONGODB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
        
//     })
//     .then(() => console.log(`connecting to database`))
//     .catch((error) => console.log('error:', error));
// }

// module.exports = databaseConnection;

const mongoose = require('mongoose');
require('dotenv').config();

module.exports = async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(x => {
            console.log(
                `Connected to Mongo! Database name: "${x.connections[0].name}"`,
            );
        })
        .catch(err => {
            console.error('Error connecting to mongo', err);
        });

    return mongoose;
};