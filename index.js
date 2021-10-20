const app = require('./app');
const mongo = require('./src/config/database');

const port = process.env.PORT || 3000;

const server = app.listen(port, () => console.log(`listening from port ${port}`));

module.exports = async () => {

    await mongo().then(mongoose => {
        try{
            console.log('Connected to mongo!!');
            command.execute(client, message, args);
        }
        finally{
            mongoose.connection.close();
        }
    });

};

module.exports = server;