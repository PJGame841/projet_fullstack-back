const express = require('express');
const morgan = require('morgan');
const errorMiddleware = require('./middlewares/error');

require('./startup/env')();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(errorMiddleware)

require('./startup/db');
require('./routes')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server started at port: ' + port);
});