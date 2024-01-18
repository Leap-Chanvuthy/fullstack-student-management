const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        min: 8,
        max: 15,
        default: ''
    },
    lastname: {
        type: String,
        required: true,
        min: 8,
        max: 15,
        default: ''
    },
    image_url: {
        type: String,
        default: ''
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    contact: {
        type: String,
        unique: true,
        default: ''
    },
    course: {
        type: Array,
        default: []
    },
    address: {
        type: String,
        default: ''
    },
    attendance: {
        type: Number,
        default: 0
    },
    id_card: {
        type: String,
        unique: true,
        default: ''
    },
    dob: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        unique: true,
        default: ''
    }
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
