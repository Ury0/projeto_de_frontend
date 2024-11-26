import { Component, OnInit } from '@angular/core';
import { DbApiSequalizeExpressService } from '../../service/db-api-sequalize-express.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forme-cadastro',
  templateUrl: './forme-cadastro.component.html',
  styleUrls: ['./forme-cadastro.component.css']
})

export class FormeCadastroComponent implements OnInit {
  clients: any[] = [];

  constructor(private clientService: DbApiSequalizeExpressService) {}

  ngOnInit(): void {
    this.getClients();
  }

  // Método para obter todos os clientes
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

  // Método para enviar o formulário de cadastro
  cadastrar(form: NgForm): void {
    this.clientService.addClient(form.value).subscribe(
      (response: any) => {
        console.log('Success:', response);
        alert('Cadastro realizado com sucesso!');
        this.getClients(); // Atualiza a lista de clientes após adicionar um novo
        form.resetForm(); // Reseta o formulário após o cadastro
      },
      (error: any) => {
        console.error('Error:', error);
        alert('Erro ao cadastrar. Tente novamente.');
      }
    );
  }

  // Método para atualizar um cliente
  updateClient(id: number, form: NgForm): void {
    this.clientService.updateClient(id, form.value).subscribe(
      (response: any) => {
        console.log('Success:', response);
        alert('Cliente atualizado com sucesso!');
        this.getClients(); // Atualiza a lista de clientes após a atualização
        form.resetForm(); // Reseta o formulário após a atualização
      },
      (error: any) => {
        console.error('Error:', error);
        alert('Erro ao atualizar. Tente novamente.');
      }
    );
  }

  // Método para deletar um cliente
  deleteClient(id: number): void {
    this.clientService.deleteClient(id).subscribe(
      (response: any) => {
        console.log('Success:', response);
        alert('Cliente deletado com sucesso!');
        this.getClients(); // Atualiza a lista de clientes após a exclusão
      },
      (error: any) => {
        console.error('Error:', error);
        alert('Erro ao deletar. Tente novamente.');
      }
    );
  }
}