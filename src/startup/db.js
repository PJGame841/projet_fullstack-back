const mongoose = require('mongoose');

// Mongodb Connection
mongoose.connect(process.env.APP_MONGO_URL).then(() => {
    console.log('Mongodb connected !');
});