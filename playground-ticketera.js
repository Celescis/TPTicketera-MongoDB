const database = 'Tickets';
const collection = 'Ticket';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

//COLECCION TICKETS
// #El objeto ticket debe tener atributos de de tipo:
// objeto,
// string,
// arrays de valores,
// arrays de objetos,
// objeto con arrays de atributo.
const now = new Date();
const fecha = now.toISOString().split('T')[0];
const hora = now.toLocaleTimeString('en-US');

const ticket = [{
  // Objeto: datos del cliente, con su ubicacion gps y plan, ademas veo si es empleado
  "cliente": {
    "nombre": "Celeste",
    "apellido": "Cisternas",
    "ubicacion": {
      "localidad": {
        "codigoPostal": "B1870",
        "descripcion": "Avellaneda"
      },
      "coordenadas": {
        "latitud": -34.6625,
        "longitud": -58.365
      }
    },
    "plan": {
      "nombre": "SuperPackFull",
      "canales": ["Canal 1", "Canal 2"]
    },
    "esEmpleado": false
  },
  // String: breve descripcion del cliete por lo cual pide el ticket
  "descripcionCliente": "No puedo ver bien mis canales",
  // Array de valores: motivos por los cuales se haria el ticket
  "motivoTicket": ["desperfecto", "cambio de plan", "dar de baja", "dar de alta"],
  // Array de objetos: informacion del ticket con fecha y hora y su estado, ademas quien fue el que tomo el ticket
  "infoTicket": [
    {
      "fecha": fecha,
      "hora": hora,
      "estado": "abierto",
      "responsableTicket": {
        "nombre": "Pepita",
        "apellido": "Gomez"
      }
    }
  ],
  // Objeto con arrays como atributos: guardar historial de derivaciones y que soluciones encontro cada sector
  "derivacion": {
    "historialDerivaciones": [
      {
        "fecha": fecha,
        "departamento": "Servicio Técnico",
        "responsableArea": {
          "nombre": "Maria",
          "apellido": "Fernandez"
        },
        "soluciones": [
          {
            "descripcion": "Se revisó la conexión a internet",
            "exito": false
          }
        ]
      }
    ]
  }
}];



//COLECCION CLIENTES
//carga un ticket por (desperfecto, cambio de plan ,dar de baja, dar de alta).
//Los clientes tienen una posición de gps
//se almacena de los clientes sus tipo de planes( normal , SuperPack1, SuperPackFull), su composición(cantidad de canales y que canales)
//los empleados también pueden ser usuarios
//La localidad es un objeto con código postal y descripción.

