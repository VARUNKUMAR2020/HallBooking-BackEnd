const express = require("express");
const router = express.Router();
const {home, createUser, login, forgetpassword, resetPassword} = require("../Controller/authcontroller");
const { bookings, bookedHalls } = require("../Controller/bookingController");

// API's
router.route('/').get(home);
router.route('/create').post(createUser);
router.route('/login').post(login);
router.route('/forgotpassword').post(forgetpassword);
router.route('/reseetPassword').post(resetPassword);
router.route('/bookings').post(bookings);
router.route('/bookedhall').post(bookedHalls);
module.exports = router;  