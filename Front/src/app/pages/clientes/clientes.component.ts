import { Component } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  infoSeleccionada = '';
  estructuraConsulta: any;
  mostrarEstructura = false;
  clientes: any[] = [];

  constructor(private clienteService: ClientesService) { }

  //TICKET ESTRUCTURA
  mostrarEstructuraConsulta(): void {
    this.mostrarEstructura = true;
    this.estructuraConsulta = {
      cliente: {
        nombre: "",
        apellido: "",
        contacto: {
          email: "",
          telefonos: []
        },
        localidad: {
          codigoPostal: 0,
          descripcion: ""
        },
        ubicacion: {
          geolocalizacion: {
            type: "Point",
            coordinates: [0, 0]
          },
          properties: {
            name: ""
          }
        },
        plan: {
          nombre: "",
          canales: []
        },
        esEmpleado: false
      }
    };
  }

  cargarClientesTodos(): void {
    this.clienteService.traerTodos().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  private handleResponse(data: any): void {
    this.mostrarEstructura = false;
    this.clientes = data;
    this.infoSeleccionada = '';
  }

  private handleError(error: any): void {
    this.mostrarEstructura = false;
    console.error('Error al cargar tickets:', error);
    this.infoSeleccionada = 'Error al cargar tickets.';
  }

  mostrarInfo(info: string) {
    this.infoSeleccionada = info;
  }
}

