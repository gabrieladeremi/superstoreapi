const app = require('./app');

const PORT = 3000;

const server = app.listen(PORT, () => console.log(`listening from port ${PORT}`));

module.exports = server;