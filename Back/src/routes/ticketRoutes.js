const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

router.get('/', ticketController.traerTickets);
//OPERADORES
router.get('/eq', ticketController.traerTicketsEq);
router.get('/ne', ticketController.traerTicketsNe);
router.get('/in', ticketController.traerTicketsIn);

//LOGICOS
router.get('/or', ticketController.traerTicketsOr);
router.get('/and', ticketController.traerTicketsAnd);
router.get('/nor', ticketController.traerTicketsNor);
router.get('/not', ticketController.traerTicketsNot);
module.exports = router;

