const app = require('./app');

const databaseConnection = require('./src/config/database');

const port = process.env.PORT || 3000;

databaseConnection();

const server = app.listen(port, () => console.log(`listening from port ${port}`));

module.exports = server;