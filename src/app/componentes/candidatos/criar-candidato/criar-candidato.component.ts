import { Component } from '@angular/core';
import { Candidato } from '../candidato';
import { CandidatoService } from '../candidato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-candidato',
  templateUrl: './criar-candidato.component.html',
  styleUrls: ['./criar-candidato.component.css']
})
export class CriarCandidatoComponent {

  candidato:Candidato={
    email:'',
    nome:'',
    sobrenome:'',
    senha:'',
    confirmacaoSenha:''
  }

  constructor(private service: CandidatoService, private router: Router){

  }

  criarCandidato(){
    this.service.criar(this.candidato).subscribe(() => {
      this.router.navigate(['/listarCandidato'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarCandidato'])
  }

}
