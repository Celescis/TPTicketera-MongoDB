const Ticket = require('../models/ticketModel');

//POST - CREAR UN TICKET
exports.crearTicket = async (req, res) => {
// Instancia ticket con los datos del body
const newTicket = new Ticket(req.body);

try {
  // Guardar
  const savedTicket = await newTicket.save();
  // Devolver respuesta con el ticket guardado
  res.status(201).json(savedTicket);
} catch (error) {
  res.status(400).json({ message: error.message });
}
};


//GET - TRAER TODOS LOS TICKETS
exports.traerTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({});
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


