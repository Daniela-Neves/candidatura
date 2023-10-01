import { Component } from '@angular/core';
import { Candidato } from '../candidato';
import { CandidatoService } from '../candidato.service';
import { Router } from '@angular/router';
// import * as bcrypt from 'bcryptjs';  

@Component({
  selector: 'app-criar-candidato',
  templateUrl: './criar-candidato.component.html',
  styleUrls: ['./criar-candidato.component.css']
})
export class CriarCandidatoComponent {

  confirmacaoSenhaDigitada: string = '';

  candidato : Candidato = {
    id: 0,
    nome: '',
    sobrenome: '',
    email: '',
    senha: ''
};

  constructor(private service: CandidatoService, private router: Router){

  }

  criarCandidato() {
    if (this.candidato.senha !== this.confirmacaoSenhaDigitada) {
      alert('A senha e a confirmação de senha não correspondem.');
      return;
    }
  
    // const salt = bcrypt.genSaltSync(10);
    // const senhaCriptografada = bcrypt.hashSync(this.candidato.senha, salt);
    // this.candidato.senha = senhaCriptografada;
  
    this.service.criar(this.candidato).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
  
  cancelar() {
    this.router.navigate(['/login'])
  }

}
