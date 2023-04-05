const mongoose = require('mongoose')
const modelSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  last: {
    type: String,
  },
  buy: {
    type: String,
  },
  sell: {
    type: String,
  },
  volume: {
    type: String,
  },
  base_unit: {
    type: String,
  },
});
const basicModel = mongoose.model('users', modelSchema)
module.exports = basicModel;