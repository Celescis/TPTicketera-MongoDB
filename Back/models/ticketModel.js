//COLECCION TICKETS
// El objeto ticket debe tener atributos de de tipo:
// objeto,
// string,
// arrays de valores,
// arrays de objetos,
// objeto con arrays de atributo.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// SUBSCHEMA LOCALIDAD CLIENTE
const LocalidadSchema = new Schema({
  codigoPostal: String,
  descripcion: String
});

// SUBSCHEMA COORDENADAS CLIENTE
const CoordenadasSchema = new Schema({
  latitud: Number,
  longitud: Number
});

// SUBSCHEMA PLAN CLIENTE
const PlanSchema = new Schema({
  nombre: String,
  canales: [String]
});

// SUBSCHEMA CLIENTE
const ClienteSchema = new Schema({
  nombre: String,
  apellido: String,
  ubicacion: {
    localidad: LocalidadSchema,
    coordenadas: CoordenadasSchema
  },
  plan: PlanSchema,
  esEmpleado: Boolean
});

// SUBSCHEMA RESPONSABLE TICKET
const ResponsableTicketSchema = new Schema({
  nombre: String,
  apellido: String
});

// SUBSCHEMA INFOTICKET
const InfoTicketSchema = new Schema({
  fecha: Date,
  estado: {
    type: String,
    enum: ['abierto', 'cerrado', 'en proceso'],
    default: 'abierto'
  },
  responsableTicket: ResponsableTicketSchema
});

// SUBSCHEMA SOLUCIONES DE HISTORIAL DERIVACIONES
const SolucionSchema = new Schema({
  descripcion: String,
  exito: Boolean
});

// SUBSCHEMA HISTORIAL DERIVACIONES
const HistorialDerivacionesSchema = new Schema({
  fecha: Date,
  departamento: String,
  responsableArea: ResponsableTicketSchema,
  soluciones: [SolucionSchema]
});

// SUBSCHEMA DERIVACION
const DerivacionSchema = new Schema({
  historialDerivaciones: [HistorialDerivacionesSchema]
});

// SCHEMA PRINCIPAL TICKET
const TicketSchema = new Schema({
  cliente: ClienteSchema,
  descripcionCliente: String,
  motivoTicket: [String],
  infoTicket: [InfoTicketSchema],
  derivacion: DerivacionSchema
});

const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = Ticket;
