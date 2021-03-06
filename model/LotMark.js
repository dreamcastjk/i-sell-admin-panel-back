"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//описание схемы модели оценки лота
const lotMarkSchema = new Schema({

   sender:{
     type: Schema.Types.ObjectId,
     ref: 'users'
   },//sender

   receiver:{
    type: Schema.Types.ObjectId,
    ref: 'lots'
   },//receiver

   mark:{
      type: Number
   },//mark

});

//создание оценки лота в базе
module.exports = mongoose.model('lotMarks', lotMarkSchema );
