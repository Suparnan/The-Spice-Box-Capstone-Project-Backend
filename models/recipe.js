const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    procedure: {
        type: [String],
        required: true
    },
    src: {
        type: String,
    },
});

module.exports = mongoose.model("Recipe", recipeSchema);