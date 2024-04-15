const { createHmac } = require('node:crypto');

const hash = (password) => {
    return createHmac('sha256', process.env.APP_SECRET_KEY)
        .update(password)
        .digest('hex');
}

module.exports = {
    hash
}