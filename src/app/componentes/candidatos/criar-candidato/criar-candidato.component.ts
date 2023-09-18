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

  confirmacaoSenhaDigitada: string = '';

  candidato : Candidato = {
    id: 0,
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    dataNascimento: '',
    genero: '',
    identificacao: '',
    deficiencias: {
        fisica: false,
        auditiva: false,
        visual: false,
        intelectual: false,
        autista: false
    },
    endereco: {
        cep: '',
        endereco: '',
        numero: '',
        cidade: '',
        estado: ''
    },
    linkedin: '',
    formacao: {
        fundamental: '',
        ensinoMedio: '',
        ensinoSuperior: '',
        mestrado: '',
        doutorado: '',
        inicio: '',
        fim: ''
    },
    idiomas: [
      {
          idioma: '',
          nivel: ''
      }
  ],
  certificados: [
      {
          nome: '',
          organizacao: '',
          dataEmissao: ''
      }
  ],
    experiencia: {
        titulo: '',
        tipoEmprego: '',
        nomeEmpresa: '',
        inicio: '',
        fim: ''
    }
};

  constructor(private service: CandidatoService, private router: Router){

  }

  criarCandidato() {
    // Verifica se a senha e a confirmação de senha correspondem
    if (this.candidato.senha !== this.confirmacaoSenhaDigitada) {
      alert('A senha e a confirmação de senha não correspondem.');
      return;
    }
  
    // Chama o serviço para criar o candidato
    this.service.criar(this.candidato).subscribe(() => {
      this.router.navigate(['/listarCandidato']);
    });
  }
  

  cancelar() {
    this.router.navigate(['/listarCandidato'])
  }

}
