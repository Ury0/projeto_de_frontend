import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showRendaFixa = false;
  showRendaVariavel = false;

  toggleContent(section: string): void {
    if (section === 'rendaFixa') {
      this.showRendaFixa = !this.showRendaFixa;
      if (this.showRendaVariavel) this.showRendaVariavel = false;
    } else if (section === 'rendaVariavel') {
      this.showRendaVariavel = !this.showRendaVariavel;
      if (this.showRendaFixa) this.showRendaFixa = false;
    }
  }
}

