const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaOpts = {};

const schemaObj = new Schema({
  userId: { type: Number, required: true, index: true },
  id: { type: Number, required: true, index: true },
  title: { type: String, required: true },
  body: { type: String }
}, schemaOpts);

schemaObj.set('toJSON', { getters: true, virtuals: true });
schemaObj.set('toObject', { getters: true, virtuals: true });

module.exports = exports = mongoose.model('posts', schemaObj);
