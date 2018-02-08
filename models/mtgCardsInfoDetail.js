const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


//Schema For MTG Cards Detail Card Info 
const mtgCradsInfoDetailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    manaCost: {
        type: String,
        required: true,
        trim: true
    },
    cmc: {
        type: Number,
        required: true,
        trim: true
    },
    colors: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    supertypes: {
        type: String,
        required: true,
        trim: true
    },
    types: {
        type: String,
        required: true,
        trim: true
    },
    subtypes:
    {
        type: String,
        required: true,
        trim: true
    },
    rarity: {
        type: String,
        required: true,
        trim: true
    },
    set: {
        type: String,
        required: true,
        trim: true
    },
    power: {
        type: Number,
        required: true,
        trim: true
    },
    toughness: {
        type: Number,
        required: true,
        trim: true
    }, 
    imageUrl: {
        type: String,
        required: true,
        trim: true
    }
})

const mtgCardsInfoDetail = mongoose.model('mtgCards', mtgCradsInfoDetailSchema );
module.exports = mtgCardsInfoDetail;