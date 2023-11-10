const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

router.post('/', ticketController.crearTicket);
router.get('/', ticketController.traerTickets);

module.exports = router;

