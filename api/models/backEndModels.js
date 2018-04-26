'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var ModelSchema = new Schema ({
  modelPropertyString: {
    type: String,
    required: 'String example'
  },
  modelPropertyNumber: Number,
  modelPropertyDate: {
    type: Date,
    default: Date.now
  },
  modelPropertyStatus: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  },
  modelPropertyBoolean: Boolean
});

module.exports = mongoose.model('Models', ModelSchema);
