import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:3000/api/clients';

  constructor(private http: HttpClient) { }

  // Método para obter todos os clientes
  getClients(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para obter um cliente específico pelo ID
  getClientById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Método para adicionar um novo cliente
  addClient(client: any): Observable<any> {
    return this.http.post(this.apiUrl, client);
  }

  // Método para atualizar um cliente existente
  updateClient(id: number, client: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, client);
  }

  // Método para deletar um cliente pelo ID
  deleteClient(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
