const Ticket = require('../models/ticketModel');


//GET - TRAER TODOS LOS TICKETS
exports.traerTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({});
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//SPRINT 2
/*
$near
$geoWithin
$geoIntersect
Operator 
  - $eq: Iguala al valor especificado.
  - $gt: Mayor que
  - $gte: Mayor o igual
  - $lt: Menor que
  - $lte: Menor igual
  - $ne: Distinto
  - $in: Entre los valores [a, b,c ...]
  - $nin: No esta entre los valores [a, b,c ...]

Busquedas por texto indices
*/

//OPERADORES - - $eq, $gt, $gte, $lt, $lte, $ne, $in, $nin
//GET - ($eq) Traer tickets en estado ABIERTO
exports.traerTicketsEq = async (req, res) => {
  try {
    const traerTicketsEq = await Ticket.find({ "infoTicket.estado": { $eq: "abierto" } });
    res.status(200).json(traerTicketsEq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET - ($ne) Traer tickets en estado NO cerrados
//rta: 6
exports.traerTicketsNe = async (req, res) => {
  try {
    const traerTicketsNe = await Ticket.find({ "infoTicket.estado": { $ne: "cerrado" } });
    res.status(200).json(traerTicketsNe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET - ($in) Traer tickets que
//rta: 6
exports.traerTicketsIn = async (req, res) => {
  try {
    const traerTicketsIn = await Ticket.find({ "infoTicket.motivo": { $in: ["desperfecto", "acceso denegado"] } });

    res.status(200).json(traerTicketsIn);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//LOGICOS - $or, $and, $nor, $not
//GET - ($or) Traer tickets en estado abierto o motivo desperfecto
//rta: 5
exports.traerTicketsOr = async (req, res) => {
  try {
    const traerTicketsOr = await Ticket.find({
      $or: [
        { "infoTicket.estado": "abierto" },
        { "infoTicket.motivo": "desperfecto" }
      ]
    });
    res.status(200).json(traerTicketsOr);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET - ($and) Traer tickets donde el cliente es empleado y el estado es "abierto".
//rta: 2
exports.traerTicketsAnd = async (req, res) => {
  try {
    const traerTicketsAnd = await Ticket.find({
      $and: [
        { "cliente.esEmpleado": true },
        { "infoTicket.estado": "abierto" }
      ]
    });
    res.status(200).json(traerTicketsAnd);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET - ($nor) Traer tickets donde el cliente no es empleado y el estado no es "cerrado".
//rta: 3
exports.traerTicketsNor = async (req, res) => {
  try {
    const traerTicketsNor = await Ticket.find({
      $nor: [
        { "cliente.esEmpleado": true },
        { "infoTicket.estado": "cerrado" }
      ]
    });
    res.status(200).json(traerTicketsNor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET - ($not) Traer tickets donde el estado no es "pendiente".
//rta: 8
exports.traerTicketsNot = async (req, res) => {
  try {
    const traerTicketsNot = await Ticket.find({
      "infoTicket.estado": { $not: { $eq: "pendiente" } }
    });
    res.status(200).json(traerTicketsNot);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};