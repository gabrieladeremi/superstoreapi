const { connect } =  require('mongoose');

require("dotenv").config();

const databaseConnection = async () => {
    await connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    })
    .then(() => console.log(`connecting to database`))
    .catch((error) => console.log('error:', error));
}

module.exports = databaseConnection;