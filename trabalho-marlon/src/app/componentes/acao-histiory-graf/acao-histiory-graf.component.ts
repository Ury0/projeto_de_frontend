import { Component, Input, OnChanges } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-acao-history-graf',
  templateUrl:  './acao-histiory-graf.component.html',
  styleUrls: ['./acao-histiory-graf.component.css']
})
export class AcaoHistoryGrafComponent implements OnChanges {
  @Input() historicalData: any[] = []; // Inicializando como um array vazio

  public lineChartData: ChartData = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Preço de Fechamento',
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      }
    ]
  };

  public lineChartOptions: ChartOptions = {
    responsive: true,
  };

  public lineChartColors = [
    {
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
    }
  ];

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  ngOnChanges(): void {
    if (this.historicalData) {
      this.updateChartData();
    }
  }

  updateChartData() {
    if (this.lineChartData.labels && this.historicalData) {
      this.lineChartData.labels = this.historicalData.map(data => new Date(data.date * 1000).toLocaleDateString());
    }

    if (this.lineChartData.datasets && this.historicalData) {
      this.lineChartData.datasets[0].data = this.historicalData.map(data => data.close);
    }
  }
}
