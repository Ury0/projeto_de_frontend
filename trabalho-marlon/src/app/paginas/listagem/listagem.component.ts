import { Component, OnInit } from '@angular/core';
import { ApiAService } from '../../service/api-a.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent implements OnInit {
  herolist: any = null;
  constructor(private hero: ApiAService){}
  ngOnInit(): void {
    this.hero.getHero().subscribe((data:any)=>{
      this.herolist = data;
    })      
  }
}
