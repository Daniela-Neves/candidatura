import { Component } from '@angular/core';
import { EmpresasService } from '../empresas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-empresa',
  templateUrl: './login-empresa.component.html',
  styleUrls: ['./login-empresa.component.css']
})
export class LoginEmpresaComponent {

  empresa = {
    email: '',
    senha: ''
  };

  constructor(private empresaService: EmpresasService, private router: Router) {}

  realizarLogin() {
    this.empresaService.login(this.empresa.email, this.empresa.senha)
      .subscribe(
        (empresaLogado) => {
          if (empresaLogado) {
            console.log('Login bem-sucedido.');
            this.router.navigate(['/paginaInicialEmpresa', empresaLogado.id]);          } else {
            alert('Login falhou. E-mail ou senha incorretos.');
          }
        },
        (error) => {
          console.error('Erro ao realizar o login:', error);
          alert('Erro ao realizar o login. Tente novamente mais tarde.');
        }
      );
  }
}
