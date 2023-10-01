import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CandidatoService } from '../candidato.service';
import { Candidato } from '../candidato';
import { catchError, map} from 'rxjs/operators';
import { of } from 'rxjs';
// import * as bcrypt from 'bcryptjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  candidato = {
    email: '',
    senha: ''
  };

  constructor(private candidatoService: CandidatoService, private router: Router) {}

  realizarLogin() {
    // const saltRounds = 10;  // Número de saltos para a criptografia (recomendado: 10)
    // const hashedPassword = bcrypt.hashSync(this.candidato.senha, saltRounds);
  

    // const salt = bcrypt.genSaltSync(10);
    // const senhaCriptografada = bcrypt.hashSync(this.candidato.senha, salt);
    // this.candidato.senha = senhaCriptografada;
  
    const senha = this.candidato.senha;  
    this.candidatoService.login(this.candidato.email, senha)
      .subscribe(
        (candidatoLogado) => {
          if (candidatoLogado) {
            console.log('Login bem-sucedido.');
            this.router.navigate(['/menu-candidato', candidatoLogado.id]);
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
