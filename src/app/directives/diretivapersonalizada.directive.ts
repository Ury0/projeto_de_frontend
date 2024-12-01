import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDiretivapersonalizada]'
})
export class DiretivapersonalizadaDirective {

  @HostBinding('style.backgroundColor') cordefundo: string ='red'
  

  constructor() { }

  @HostListener('mouseover') aoclicar() {
      this.cordefundo = 'transparent'
  }

}
