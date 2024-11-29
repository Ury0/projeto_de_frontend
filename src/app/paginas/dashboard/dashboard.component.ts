import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  selectedTicker: string | undefined;
  historicalData: any[]=[];
  
  handleTickerSelected(ticker: string) { 
    this.selectedTicker = ticker; 
  }
  updateHistoricalData(data: any[]) { 
    this.historicalData = data; 
  }
}
