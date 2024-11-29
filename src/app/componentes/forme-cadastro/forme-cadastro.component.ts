import { Component, OnInit } from '@angular/core';
import { DbApiSequalizeExpressService } from '../../service/db-api-sequalize-express.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-forme-cadastro',
  templateUrl: './forme-cadastro.component.html',
  styleUrls: ['./forme-cadastro.component.css']
})

export class FormeCadastroComponent implements OnInit {
  clients: any[] = [];

  constructor(private clientService: DbApiSequalizeExpressService, private router: Router) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.clientService.getClients().subscribe(
      (data: any[]) => {
        this.clients = data;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

  cadastrar(form: NgForm): void {
    this.clientService.addClient(form.value).subscribe(
      (response: any) => {
        console.log('Success:', response);
        alert('Cadastro realizado com sucesso!');
        this.getClients(); 
        form.resetForm(); 
        this.router.navigate(['/']);
      },
      (error: any) => {
        console.error('Error:', error);
        alert('Erro ao cadastrar. Tente novamente.');
      }
    );
  }

  updateClient(id: number, form: NgForm): void {
    this.clientService.updateClient(id, form.value).subscribe(
      (response: any) => {
        console.log('Success:', response);
        alert('Cliente atualizado com sucesso!');
        this.getClients(); 
        form.resetForm(); 
      },
      (error: any) => {
        console.error('Error:', error);
        alert('Erro ao atualizar. Tente novamente.');
      }
    );
  }

  
  deleteClient(id: number): void {
    this.clientService.deleteClient(id).subscribe(
      (response: any) => {
        console.log('Success:', response);
        alert('Cliente deletado com sucesso!');
        this.getClients(); 
      },
      (error: any) => {
        console.error('Error:', error);
        alert('Erro ao deletar. Tente novamente.');
      }
    );
  }
}