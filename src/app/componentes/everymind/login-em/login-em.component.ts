import { Component } from '@angular/core';
import { EverymindService } from '../everymind.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-em',
  templateUrl: './login-em.component.html',
  styleUrls: ['./login-em.component.css']
})
export class LoginEmComponent {

  everymind = {
    email: '',
    senha: ''
  };

  constructor(private everymindService: EverymindService, private router: Router) {}


  realizarLogin() {
    this.everymindService.login(this.everymind.email, this.everymind.senha)
      .subscribe(
        (everymindLogado) => {
          if (everymindLogado) {
            console.log('Login bem-sucedido.');
            this.router.navigate(['/menu-em', everymindLogado.id]);          
          } else {
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
