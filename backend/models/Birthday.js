const mongoose = require('mongoose');

const BirthSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
});

const Birthday =  mongoose.model("Birthday", BirthSchema);
module.exports = Birthday;