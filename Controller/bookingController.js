const Booking = require("../Model/Bookings");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "ajehbaikeoe{'.'/.'326659564DFEAJHJBC1C48C";

// Bookings
exports.bookings = async (req, res) => {
  const { name, description, token } = req.body;
  const { email } = jwt.verify(token, JWT_SECRET);
  try {
    await Booking.create({ name, description, email: email });
    res.status(200).json({ status: true, message: "Booked Successfully" });
  } catch (error) {
    res.status(404).json({ message: "Page not Found" });
  }
};

//Booked Halls List
exports.bookedHalls = async (req, res) => {
  const { token } = req.body;
  const { email } = jwt.verify(token, JWT_SECRET);
  const existingUser = await Booking.findOne({ email });
  try {
    if (!existingUser) {
      res.status(200).json({ status: false, message: "NO Booking Found" });
    } else {
      const booked = await Booking.find({ email });
      res.status(200).json({ status: true, message: "Yours Bookings",data:booked });
    }
  } catch (error) {
    res.json({message:"Something Went Wrong"});
  }
};
