const mongoose = require('mongoose');

const MyLinkSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        default: "other"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("MyLinks", MyLinkSchema);