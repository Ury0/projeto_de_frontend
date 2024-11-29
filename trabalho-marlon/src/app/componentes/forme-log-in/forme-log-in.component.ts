import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; // Importando o Router

@Component({
  selector: 'app-forme-log-in',
  templateUrl: './forme-log-in.component.html',
  styleUrls: ['./forme-log-in.component.css']
})
export class FormeLogInComponent {
  isLoggedIn: boolean = false;
  errorMessage: string = '';

  private loginUrl = 'http://localhost:3000/api/login'; // Substitua pela URL correta da sua API de login

  constructor(private http: HttpClient, private router: Router) {} // Injetando o Router

  // Método para lidar com o envio do formulário de login
  onLogin(form: NgForm): void {
    this.http.post<any>(this.loginUrl, form.value).subscribe(
      (response: any) => {
        console.log('Login bem-sucedido:', response);
        this.isLoggedIn = true;
        this.errorMessage = '';
        // Navegar para a página "home" após login bem-sucedido
        this.router.navigate(['/home']);
      },
      (error: any) => {
        console.error('Erro de login:', error);
        this.isLoggedIn = false;
        this.errorMessage = 'Erro ao fazer login. Verifique suas credenciais e tente novamente.';
      }
    );
  }

  // Método para lidar com o logout
  onLogout(): void {
    this.isLoggedIn = false;
    console.log('Logout bem-sucedido');
    // Navegar para a página de login após logout
    this.router.navigate(['/login']);
  }
}