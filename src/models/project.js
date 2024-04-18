const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
    title: {
         type: String,
         required: true
    },
    short_description: {
        type: String,
        maxLength: 80,
        required: true
    },
    description: {
        type: String,

        required: true
    },
    keywords: [{
        type: String
    }],
    thumbnail: {
        type: String,
        required: true
    },
    images: {
        type: [{
            type: String
        }],
        validate: [arrayLimit, '{PATH} exceeds the limit of 5']
    },
    click_count: {
        type: Number
    }
});

function arrayLimit(val) {
    return val.length <= 5;
}

module.exports = model('Project', projectSchema);