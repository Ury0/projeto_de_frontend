import { Component, OnInit } from '@angular/core';
import { DbApiSequalizeExpressService } from '../../service/db-api-sequalize-express.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forme-cadastro',
  templateUrl: './forme-cadastro.component.html',
  styleUrl: './forme-cadastro.component.css'
})

export class FormeCadastroComponent implements OnInit {
  clients: any[] = [];

  constructor(private clientService: DbApiSequalizeExpressService) {}

  ngOnInit(): void {
    this.getClients();
  }

  // Método para obter todos os clientes
  getClients() {
    this.clientService.getClients().subscribe(
      (data) => {
        this.clients = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  // Método para enviar o formulário de cadastro
  cadastrar(form: NgForm) {
    this.clientService.addClient(form.value).subscribe(
      response => {
        console.log('Success:', response);
        alert('Cadastro realizado com sucesso!');
        this.getClients(); // Atualiza a lista de clientes após adicionar um novo
      },
      error => {
        console.error('Error:', error);
        alert('Erro ao cadastrar. Tente novamente.');
      }
    );
  }

  // Método para atualizar um cliente
  updateClient(id: number, form: NgForm) {
    this.clientService.updateClient(id, form.value).subscribe(
      response => {
        console.log('Success:', response);
        alert('Cliente atualizado com sucesso!');
        this.getClients(); // Atualiza a lista de clientes após a atualização
      },
      error => {
        console.error('Error:', error);
        alert('Erro ao atualizar. Tente novamente.');
      }
    );
  }

  // Método para deletar um cliente
  deleteClient(id: number) {
    this.clientService.deleteClient(id).subscribe(
      response => {
        console.log('Success:', response);
        alert('Cliente deletado com sucesso!');
        this.getClients(); // Atualiza a lista de clientes após a exclusão
      },
      error => {
        console.error('Error:', error);
        alert('Erro ao deletar. Tente novamente.');
      }
    );
  }
}

