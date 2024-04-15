const express = require('express');

require('./startup/env')();

const app = express();

app.use(express.json());

require('./startup/db');
require('./routes')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server started at port: ' + port);
});