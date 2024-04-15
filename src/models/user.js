const { Schema, model } = require('mongoose');
const jwt = require('jsonwebtoken');
const { hash } = require('../services/crypto');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
userSchema.method('comparePassword', function(password) {
    return this.password === hash(password);
});
userSchema.method('generateToken', function() {
    return jwt.sign({ _id: this._id }, process.env.APP_JWT_SECRET);
});


userSchema.pre('save', function(next) {
    if (this.isModified('password')) {
        this.password = hash(this.password);
    }
    next();
});

module.exports = model('User', userSchema);