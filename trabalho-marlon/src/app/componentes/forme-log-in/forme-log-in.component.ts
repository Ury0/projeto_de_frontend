import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forme-log-in',
  templateUrl: './forme-log-in.component.html',
  styleUrls: ['./forme-log-in.component.css']
})
export class FormeLogInComponent {
  isLoggedIn: boolean = false;
  errorMessage: string = '';

  private loginUrl = 'http://localhost:3000/api/login'; // URL da API

  constructor(private http: HttpClient, private router: Router) {}

  // Método de login
  onLogin(form: NgForm): void {
    // Validar o formulário antes de enviar
    if (form.invalid) {
      alert("preencha os campos")
      this.errorMessage = 'Por favor, preencha todos os campos obrigatórios.';
      return;
    }

    this.http.post<any>(this.loginUrl, form.value).subscribe(
      (response: any) => {
        console.log('Login bem-sucedido:', response);

        // Verificar se o backend retornou sucesso
        if (response.logI) {
          this.isLoggedIn = true;
          this.errorMessage = '';
          // Redirecionar para a página principal após login
          this.router.navigate(['/home']);
        } else {
          this.isLoggedIn = false;
          this.errorMessage = 'Login falhou. Verifique suas credenciais.';
        }
      },
      (error: any) => {
        console.error('Erro de login:', error);
        this.isLoggedIn = false;

        // Verificar status do erro para mensagem mais específica
        if (error.status === 400) {
          this.errorMessage = 'Email ou senha inválidos.';
        } else {
          this.errorMessage = 'Erro ao fazer login. Tente novamente mais tarde.';
        }
      }
    );
  }

  // Método de logout
  onLogout(): void {
    this.isLoggedIn = false;
    console.log('Logout bem-sucedido');

    // Redefinir o estado do componente após logout
    this.errorMessage = '';
    // Navegar para a página de login
    this.router.navigate(['/login']);
  }
}
