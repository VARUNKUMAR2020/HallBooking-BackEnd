const mongo = require("mongoose");

const booking = new mongo.Schema({
  name: String,
  img: String,
  description: String,
});

const Bookings = mongo.model("Bookings", booking);

module.exports = Bookings;
