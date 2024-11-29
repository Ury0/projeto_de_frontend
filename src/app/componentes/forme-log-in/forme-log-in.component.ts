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

  private loginUrl = 'http://localhost:3000/api/login'; 

  constructor(private http: HttpClient, private router: Router) {}

  onLogin(form: NgForm): void {
    if (form.invalid) {
      alert("preencha os campos")
      this.errorMessage = 'Por favor, preencha todos os campos obrigatórios.';
      return;
    }

    this.http.post<any>(this.loginUrl, form.value).subscribe(
      (response: any) => {
        console.log('Login bem-sucedido:', response);
        if (response.logI) {
          this.isLoggedIn = true;
          this.errorMessage = '';
          this.router.navigate(['/home']);
        } else {
          this.isLoggedIn = false;
          this.errorMessage = 'Login falhou. Verifique suas credenciais.';
        }
      },
      (error: any) => {
        alert("email ou senha incorretos")
        console.error('Erro de login:', error);
        this.isLoggedIn = false;

        if (error.status === 400) {
          this.errorMessage = 'Email ou senha inválidos.';
        } else {
          this.errorMessage = 'Erro ao fazer login. Tente novamente mais tarde.';
        }
      }
    );
  }

  onLogout(): void {
    this.isLoggedIn = false;
    console.log('Logout bem-sucedido');
    this.errorMessage = '';
    this.router.navigate(['/login']);
  }
}
