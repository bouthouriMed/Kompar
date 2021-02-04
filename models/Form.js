const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = Schema({
    fullName: {
        type: String,
      
    },
    type: {
        type: String,
     
    },
    label: {
        type: String,

    },
    monthlyPayment: {
        type: String,
     
    },
    adress: {
        type: String,
    },
    negothiablePayment: {
        type: String,
    },
    poneNumber: {
        type: String,
        required: true,
    },
    pdl: {
        type: String,
    },
    city: {
        type: String,
    },
    pce: {
        type: String,
    },
    postalCode: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    consomEstimation: {
        type: String,
    }
});

module.exports = mongoose.model('form', formSchema)