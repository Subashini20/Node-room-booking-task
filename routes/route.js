var express = require("express");
var router = express.Router();
var bookingModule = require('../Modules/booking');

router.get("/room-available", bookingModule.getAvailability);
router.post("/book", bookingModule.bookRoom);
router.get("/room-booked-details", bookingModule.getRoombookedDetails);
router.get("/customer-booked-details", bookingModule.getCustomerbookedDetails);
router.get("/clear",bookingModule.getClear);

module.exports = router;