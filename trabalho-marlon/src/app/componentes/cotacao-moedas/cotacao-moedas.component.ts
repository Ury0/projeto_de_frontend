import { Component, OnInit } from '@angular/core';
import { ApiAService } from '../../service/api-a.service';

interface Cotacao {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
}

@Component({
  selector: 'app-cotacao-moedas',
  templateUrl: './cotacao-moedas.component.html',
  styleUrls: ['./cotacao-moedas.component.css']
})
export class CotacaoMoedasComponent implements OnInit {
  cotaMoedalist: { [key: string]: Cotacao } | null = null;

  constructor(private moedas: ApiAService) {}

  ngOnInit(): void {
    this.moedas.getCotMoedas().subscribe(
      (data:any) => {
        this.cotaMoedalist = data;
      },
      (error) => {
        console.error('Erro ao buscar cotações:', error);
      }
    );
  }
}

