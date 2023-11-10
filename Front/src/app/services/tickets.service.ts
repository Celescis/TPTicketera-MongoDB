import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  traerTodos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tickets`);
  }

}