import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiAService {

  constructor(private http: HttpClient) { }

  getHero(){
    return this.http.get("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
  }
  getCotMoedas(){
    return this.http.get("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
  }
}
