//COLECCION TICKETS
// #El objeto ticket debe tener atributos de de tipo:
// objeto,
// string,
// arrays de valores,
// arrays de objetos,
// objeto con arrays de atributo.
use('Ticketera');

const ticket = [
    {
        "cliente": {
            "nombre": "María",
            "apellido": "González",
            "contacto": {
                "email": "maria.gonzalez@email.com",
                "telefonos": ["22223333", "44445555"]
            },
            "ubicacion": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        -58.364770237352616,
                        -34.662482290635296
                    ],
                    "type": "Point"
                }
            },
            "plan": {
                "nombre": "Plan Básico",
                "canales": ["Canal 5", "Canal 6"]
            },
            "esEmpleado": false
        },
        "comentarioCliente": "No tengo acceso al Canal 6",
        "infoTicket": [
            {
                "fecha": new Date('2023-11-05'),
                "hora": "18:00:00",
                "estado": "cerrado",
                "responsableTicket": {
                    "nombre": "Carlos",
                    "apellido": "Sánchez"
                },
                "motivo": "acceso denegado"
            }
        ],
        "derivacion": {
            "historialDerivaciones": [
                {
                    "fecha": new Date('2023-11-06'),
                    "hora": "19:00:00",
                    "departamento": "Soporte Técnico",
                    "responsables": [
                        {
                            "nombre": "Lucía",
                            "apellido": "Díaz",
                            "soluciones": [
                                {
                                    "descripcion": "Revisión de permisos de cuenta",
                                    "exito": true
                                }
                            ],
                            "ticketCerrado": true
                        }
                    ]
                }
            ]
        }
    }

]

db.tickets.createIndex({ "cliente.plan.nombre": "text" });



//COLECCION CLIENTES
//carga un ticket por (desperfecto, cambio de plan ,dar de baja, dar de alta).
//Los clientes tienen una posición de gps
//se almacena de los clientes sus tipo de planes( normal , SuperPack1, SuperPackFull), su composición(cantidad de canales y que canales)
//los empleados también pueden ser usuarios
//La localidad es un objeto con código postal y descripción.

//IDEAS CONSULTAS
/*
CLIENTES
1) Cantidad de clientes con ticket por desperfecto
2) Cantidad de clientes con ticket por cambio de plan
*/

//control sobre incidentes o desperfectos: (que desperfecto ocurre, donde , cada cuanto ,etc)
//control de atención: (quien atiende más ticket, a que hora hay más trabajo, que trabajo está sin resolver,etc).
//datos zonales: (desperfectos por zona, atención hecha por zona, etc)
//datos de clientes: (quien hace más ticket, quien tiene ticket sin resolver, en qué zona tenemos más clientes, que cliente es además empleado y género ticket).

//SPRINT 1
/*
objeto
string
array de valores
array de objetos
Front end
Atributo de tipo objeto con array de atributo
Colecciones
*/

//SPRINT 2
/*
$near
$geoWithin
$geoIntersect
Operator $eq: Iguala al valor especificado.
  - $gt: Mayor que
  - $gte: Mayor o igual
  - $lt: Menor que
  - $lte: Menor igual
  - $ne: Distinto
  - $in: Entre los valores [a, b,c ...]
  - $nin: No esta entre los valores [a, b,c ...]
Logicos:
  - $or
  - $and
  - $nor
  - $not
Busquedas por texto indices
*/