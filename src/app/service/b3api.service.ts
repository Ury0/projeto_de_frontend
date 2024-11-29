import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class B3apiService {
  private apiUrl = 'https://b3api.me/api';

  constructor(private http: HttpClient) { }

  // Método para retornar todas as criptomoedas aceitas
  getAllCoins(): Observable<any[]> {
    return this.http.get<{data:any[]}>(`${this.apiUrl}/crypto/all/coins`).pipe(
      map(response => response.data)
    );
  }

  // Método para buscar opções disponíveis de fundamentus
  getFundamentusAvailable(): Observable<any[]> {
    return this.http.get<{data:any[]}>(`${this.apiUrl}/fundamentus/available`).pipe(
      map(response => response.data)
    );
  }

  // Método para buscar opções disponíveis de quotes
  getQuotesAvailable(): Observable<any[]> {
    return this.http.get<{data:any[]}>(`${this.apiUrl}/quote/available`).pipe(
      map(response => response.data)
    );
  }

  // Método para retornar o CDI e SELIC
  getTaxes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/quote/taxes`);
  }
  // Método para retornar dados sobre uma criptomoeda específica
  getQuote(ticker:string){
    return this.http.get(`${this.apiUrl}/quote/${ticker}`)
  }
  

  // Método para retornar dados sobre uma criptomoeda específica
  getCryptoData(coin: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/crypto/all/${coin}`);
  }
}
