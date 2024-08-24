// router.js
const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/controller');

// Route to handle appointment booking
router.post('/submit_appointment', appointmentController.bookAppointment);

module.exports = (app) => {
    app.use('/appointments', router); // Prefix the routes with /appointments
};
