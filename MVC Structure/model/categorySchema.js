const mongoose = require('mongoose')

const categoryschema = new mongoose.Schema({
    category: String,
});
const categorymodel = mongoose.model('category',categoryschema);

module.exports = categorymodel;
