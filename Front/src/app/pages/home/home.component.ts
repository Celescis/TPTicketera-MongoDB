import { Component } from '@angular/core';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  infoSeleccionada = '';
  tickets: any[] = [];

  constructor(private ticketService: TicketsService) { }

  //OPERADORES
  cargarTicketsEq(): void {
    this.ticketService.traerTicketsEq().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }
  cargarTicketsGt(): void {
    this.ticketService.traerTicketsGt().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  cargarTicketsGte(): void {
    this.ticketService.traerTicketsGte().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  cargarTicketsLt(): void {
    this.ticketService.traerTicketsLt().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  cargarTicketsLte(): void {
    this.ticketService.traerTicketsLte().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  cargarTicketsNe(): void {
    this.ticketService.traerTicketsNe().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  cargarTicketsIn(): void {
    this.ticketService.traerTicketsIn().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  cargarTicketsNin(): void {
    this.ticketService.traerTicketsNin().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  //LOGICOS
  cargarTicketsOr(): void {
    this.ticketService.traerTicketsOr().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  cargarTicketsAnd(): void {
    this.ticketService.traerTicketsAnd().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  cargarTicketsNor(): void {
    this.ticketService.traerTicketsNor().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  cargarTicketsNot(): void {
    this.ticketService.traerTicketsNot().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  //GEOLOCALIZACION
  cargarTicketsNear(): void {
    this.ticketService.traerTicketsNear().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }
  cargarTicketsGeoWithin(): void {
    this.ticketService.traerTicketsGeoWithin().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }
  cargarTicketsGeoIntersects(): void {
    this.ticketService.traerTicketsGeoIntersects().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  //AGREGATION
  cargarTicketsText(): void {
    this.ticketService.traerTicketsText().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  cargarTicketsExists(): void {
    this.ticketService.traerTicketsExists().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  cargarTicketsAll(): void {
    this.ticketService.traerTicketsAll().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  cargarTicketsElemMatch(): void {
    this.ticketService.traerTicketsElemMatch().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  cargarTicketsSize(): void {
    this.ticketService.traerTicketsSize().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  cargarTicketsDesperfectos(): void {
    this.ticketService.traerClientesDesperfectos().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  cargarResponsablesTickets(): void {
    this.ticketService.traerResponsablesTickets().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  cargarTicketsEmpleados(): void {
    this.ticketService.traerTicketsEmpleados().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }


  private handleResponse(data: any): void {
    this.tickets = data;
    this.infoSeleccionada = '';
  }

  private handleError(error: any): void {
    console.error('Error al cargar tickets:', error);
    this.infoSeleccionada = 'Error al cargar tickets.';
  }

  mostrarInfo(info: string) {
    this.infoSeleccionada = info;
  }
}
