import { isPlatformBrowser } from '@angular/common';
import { Component, Input, OnChanges, Inject, PLATFORM_ID } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-acao-history-graf',
  templateUrl: './acao-histiory-graf.component.html',
  styleUrls: ['./acao-histiory-graf.component.css']
})
export class AcaoHistoryGrafComponent implements OnChanges {
  @Input() historicalData: any[] = []; // Inicializando como um array vazio

  public lineChartData: ChartData<'line'> = {
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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnChanges(): void {
    if (isPlatformBrowser(this.platformId)) { 
      if (this.historicalData) { 
        this.lineChartData = { 
          labels: this.historicalData.map(data => new Date(data.date * 1000).toLocaleDateString()), 
          datasets: [
            { 
              data: this.historicalData.map(data => data.close), 
              label: 'Preço de Fechamento', 
              borderColor: 'rgba(75,192,192,1)', 
              backgroundColor: 'rgba(75,192,192,0.2)', 
            }
          ] 
        }; 
      } 
    }
  }

  updateChartData() {
    if (this.historicalData) {
      const labels = this.historicalData.map(data => new Date(data.date * 1000).toLocaleDateString());
      const data = this.historicalData.map(data => data.close);

      if (this.lineChartData && this.lineChartData.labels && this.lineChartData.datasets) {
        this.lineChartData.labels = labels;
        this.lineChartData.datasets[0].data = data;
      }
    }
  }
}
