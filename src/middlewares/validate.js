const { ObjectId } = require('mongoose').Types;

module.exports.validateId = (idParamKey) => (req, res, next) => {
    if (!req.params[idParamKey]) {
        return res.status(400).send({ valid: false, message: "Request param \'" + idParamKey + '\' is required' });
    }

    if (!ObjectId.isValid(req.params[idParamKey])) {
        return res.status(400).send({ valid: false, message: 'Invalid request param \'' + idParamKey + '\'' });
    }

    next()
}