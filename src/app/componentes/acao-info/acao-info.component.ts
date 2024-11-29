import { Component, EventEmitter, Input, OnChanges,Output } from '@angular/core';
import { B3apiService } from '../../service/b3api.service';


@Component({
  selector: 'app-acao-info',
  templateUrl: './acao-info.component.html',
  styleUrl: './acao-info.component.css'
})
export class AcaoInfoComponent implements OnChanges {
  @Input() ticker?: string;
  @Output() historicalDataUpdated = new EventEmitter<any[]>();
  acaoData: any;

  constructor(private acaoInfo: B3apiService) { }

  ngOnChanges(): void {
    console.log(this.ticker)
    if (this.ticker) {
      this.getAcaoData(this.ticker);
      
    }
  }

  getAcaoData(ticker:string) {
    this.acaoInfo.getQuote(ticker).subscribe((data) => {
      this.acaoData = data;
      this.historicalDataUpdated.emit(this.acaoData.historicalDataPrice); 
    }, (error) => {
      console.error('Erro ao obter os dados da ação', error);
    });
  }
}

