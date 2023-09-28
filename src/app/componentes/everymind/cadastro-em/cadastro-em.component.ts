import { Component, OnInit } from '@angular/core';
import { Everymind } from '../everymind';
import { EverymindService } from '../everymind.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-em',
  templateUrl: './cadastro-em.component.html',
  styleUrls: ['./cadastro-em.component.css']
})
export class CadastroEmComponent {

  confirmacaoSenhaDigitada: string = '';

  everymind : Everymind = {
    id: 0,
    nome: '',
    sobrenome: '',
    email: '',
    senha: ''
};

  constructor(private service: EverymindService, private router: Router){

  }

  criarEveryMind() {
    if (this.everymind.senha !== this.confirmacaoSenhaDigitada) {
      alert('A senha e a confirmação de senha não correspondem.');
      return;
    }
    this.service.criar(this.everymind).subscribe(() => {
      this.router.navigate(['/login-em']);
    });
  }


  cancelar() {
    this.router.navigate(['/login-em'])
  }

}
