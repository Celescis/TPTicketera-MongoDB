import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  //private baseUrl = 'http://localhost:3000/api/tickets';
  private baseUrl = 'https://ticketera-api.vercel.app/api/tickets';

  constructor(private http: HttpClient) { }

  traerTodos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

  traerTicketsEq(): Observable<any> {
    return this.http.get(`${this.baseUrl}/eq`);
  }

  traerTicketsGt(): Observable<any> {
    return this.http.get(`${this.baseUrl}/gt`);
  }

  traerTicketsGte(): Observable<any> {
    return this.http.get(`${this.baseUrl}/gte`);
  }

  traerTicketsLt(): Observable<any> {
    return this.http.get(`${this.baseUrl}/lt`);
  }

  traerTicketsLte(): Observable<any> {
    return this.http.get(`${this.baseUrl}/lte`);
  }

  traerTicketsNe(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ne`);
  }

  traerTicketsIn(): Observable<any> {
    return this.http.get(`${this.baseUrl}/in`);
  }
  traerTicketsNin(): Observable<any> {
    return this.http.get(`${this.baseUrl}/nin`);
  }

  traerTicketsOr(): Observable<any> {
    return this.http.get(`${this.baseUrl}/or`);
  }

  traerTicketsAnd(): Observable<any> {
    return this.http.get(`${this.baseUrl}/and`);
  }

  traerTicketsNor(): Observable<any> {
    return this.http.get(`${this.baseUrl}/nor`);
  }

  traerTicketsNot(): Observable<any> {
    return this.http.get(`${this.baseUrl}/not`);
  }

  traerTicketsNear() {
    return this.http.get(`${this.baseUrl}/near`);
  }

  traerTicketsGeoWithin() {
    return this.http.get(`${this.baseUrl}/geowithin`);
  }

  traerTicketsGeoIntersects() {
    return this.http.get(`${this.baseUrl}/geointersects`);
  }

  //AGREGATION
  traerTicketsText() {
    return this.http.get(`${this.baseUrl}/text`);
  }

  traerTicketsExists() {
    return this.http.get(`${this.baseUrl}/exists`);
  }

  traerTicketsAll() {
    return this.http.get(`${this.baseUrl}/all`);
  }

  traerTicketsElemMatch() {
    return this.http.get(`${this.baseUrl}/elemmatch`);
  }

  traerTicketsSize() {
    return this.http.get(`${this.baseUrl}/size`);
  }

  traerClientesDesperfectos() {
    return this.http.get(`${this.baseUrl}/desperfectos`);
  }

  traerResponsablesTickets() {
    return this.http.get(`${this.baseUrl}/unwindgroup`);
  }

  traerTicketsEmpleados() {
    return this.http.get(`${this.baseUrl}/lookup`);
  }




}
