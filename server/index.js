const Express = require('express');
const api = require('./api');
const cors = require('cors');

const app = new Express();

app.use(cors());

app.use('/api', api);

app.listen(4000);
console.log('Server listening on http://localhost:4000')
