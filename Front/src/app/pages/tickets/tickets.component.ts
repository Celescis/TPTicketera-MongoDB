import { Component } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {
  infoSeleccionada = '';
  tickets: any[] = [];

  constructor(private ticketService: TicketsService) { }

  //TRAER TODOS LOS TICKETS
  cargarTickets(): void {
    this.ticketService.traerTodos().subscribe(
      (data) => {
        console.log(data);
        this.tickets = data;
        this.infoSeleccionada = 'Tickets cargados.';
      },
      (error) => {
        console.error('Error al cargar tickets:', error);
        this.infoSeleccionada = 'Error al cargar tickets.';
      }
    );
  }

  mostrarInfo(info: string) {
    this.infoSeleccionada = info;
  }
}
