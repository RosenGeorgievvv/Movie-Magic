const {Schema, SchemaTypes: Types, model} = require('mongoose');

const castSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 199
    },
    name: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
})