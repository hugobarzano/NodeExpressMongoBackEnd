'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var ModelSchema = new Schema ({
   name: String
  //<<MODEL_PLACEHOLDER>>
});

module.exports = mongoose.model('Models', ModelSchema);
