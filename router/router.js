const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/controller');

router.post('/submit_appointment', appointmentController.bookAppointment);

module.exports = (app) => {
    app.use('/appointments', router);
};
