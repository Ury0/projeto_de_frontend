import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.css']
})
export class CarteiraComponent implements OnInit {
  economias: number = 0;
  gastos: number = 0;
  investimentos: number = 0;

  listaInvestimentos = [
    { ativo: 'Criptomoeda BTC', valor: 0, data: 'xxxx-xx-xx' },
  ];

  listaGastos = [
    { descricao: 'Supermercado', valor: 0, data: 'xxxx-xx-xx' },
    { descricao: 'Restaurante', valor: 0, data: 'xxxx-xx-xx' },
    { descricao: 'Transporte', valor: 0, data: 'xxxx-xx-xx' },
  ];

  saldoDisponivel: number = 0;

  ngOnInit(): void {
    this.calcularSaldo();
  }

  calcularSaldo(): void {
    const totalGastos = this.listaGastos.reduce((sum, gasto) => sum + gasto.valor, 0);
    this.saldoDisponivel = this.economias - totalGastos;
  }
}
