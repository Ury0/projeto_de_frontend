import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { B3apiService } from '../../service/b3api.service';


@Component({
  selector: 'app-lista-fundamentos',
  templateUrl: './lista-fundamentos.component.html',
  styleUrl: './lista-fundamentos.component.css'
})
export class ListaFundamentosComponent implements OnInit{
  listaFundamentos:any[]=[];
  @Output() tickerSelected = new EventEmitter<string>();
  selectedTicker: string | null = null;

  constructor(private acaofdmt: B3apiService){}
  
  ngOnInit(): void {
      this.acaofdmt.getFundamentusAvailable().subscribe((data:any)=>{
        this.listaFundamentos = data;
      },(error)=>{
        console.log("erro ao obter lista de fundamentos",error)
      })
      console.log(this.listaFundamentos.length)
  }
  onTickerClick(ticker: string) {
    this.selectedTicker = ticker; 
    this.tickerSelected.emit(ticker);
    console.log("output:"+ticker);  
  }
  onScroll(event: any) { 
    const element = event.target; 
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
       element.scrollTop = 0; 
    }    
  } 
      
}



