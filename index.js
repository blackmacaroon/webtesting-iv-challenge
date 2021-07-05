require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n*** serving up port ${port} *** hold on to your butts.. ***\n`))