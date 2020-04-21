const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaOpts = {};

const schemaObj = new Schema({
  id: { type: Number, required: true, index: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: Schema.Types.Mixed },
  phone: { type: String },
  website: { type: String },
  company: { type: Schema.Types.Mixed },
}, schemaOpts);

schemaObj.set('toJSON', { getters: true, virtuals: true });
schemaObj.set('toObject', { getters: true, virtuals: true });

module.exports = exports = mongoose.model('users', schemaObj);
