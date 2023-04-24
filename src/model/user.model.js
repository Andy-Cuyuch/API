'user strict'

const mongoose = require('mongoose');


const userSchema = mongoose.Schema({

    name: String,
    username: String,
    email: String,
    password: String,
    role: String
})

module.exports = mongoose.model('User', userSchema);

