const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // id: { type: Number, required: true, unique: true },
    name: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true,
        min: 10,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        max: 255,
        min: 3,
    },
    hobbies: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
});

module.exports = mongoose.model('user', userSchema);
