let mongoose = require('mongoose');

let schema = mongoose.Schema;

let CarSchema = new schema(
    {
        brand: { type: String, required: true, maxlength: 150 },
        model: { type: String, required: true, maxlength: 150 },
        color: { type: String, required: true, maxlength: 150 },
        year: { type: Number, required: true }
    }
)

module.exports = mongoose.model('Car', CarSchema);

