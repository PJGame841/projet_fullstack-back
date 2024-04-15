const jwt = require('jsonwebtoken');
const User = require('../models/user');

const isAuthenticated = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send({ valid: false, message: 'Authorization header is required' });
    }

    const [type, token] = authorization.split(' ');
    if (type !== 'Bearer') {
        return res.status(401).send({ valid: false, message: 'Authorization type must be Bearer' });
    }

    if (!token) {
        return res.status(401).send({ valid: false, message: 'Token is required' });
    }

    let payload
    try {
        payload = jwt.verify(token, process.env.APP_JWT_SECRET);
    } catch (error) {
        return res.status(401).send({ valid: false, message: 'Invalid token: ' + error.message });
    }
    if (!payload) {
        return res.status(401).send({valid: false, message: 'Invalid token'});
    }

    User.findById(payload._id).then(user => {
        if (!user) {
            return res.status(401).send({ valid: false, message: 'User not found' });
        }

        req.user = user;
        next();
    });
}

module.exports = { isAuthenticated };