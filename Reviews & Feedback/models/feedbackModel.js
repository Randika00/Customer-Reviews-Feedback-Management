const mongoose = require('mongoose');



const Schema = mongoose.Schema;



const feedbackSchema = new Schema({
name: { type: String, required: true },
title: { type: String, required: true },
description: { type: String, required: true },


}, {
timestamps: true,
}
);



const Feedback= mongoose.model('Feedback', feedbackSchema);



module.exports = Feedback