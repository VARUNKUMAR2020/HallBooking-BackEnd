const mongo = require("mongoose");

const booking = new mongo.Schema({
  name: String,
  description: String,
  email:String,
});

const Booking = mongo.model("Booking", booking);

module.exports = Booking;
