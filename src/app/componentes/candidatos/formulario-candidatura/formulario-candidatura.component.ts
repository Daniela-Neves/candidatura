import { Component } from '@angular/core';
import { Candidato } from '../candidato';
import { CandidatoService } from '../candidato.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-candidatura',
  templateUrl: './formulario-candidatura.component.html',
  styleUrls: ['./formulario-candidatura.component.css'],
})

export class FormularioCandidaturaComponent {
  dadosPessoais: any = {};
  certificados: any[] = [];
  // idiomas: any[] = [{ idioma: '', nivel: '' }];

  constructor(
    private service: CandidatoService,
    private router: Router,
    private route: ActivatedRoute
    ){

  }

  candidato:Candidato={
    id: 0,
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    confirmacaoSenha: '',
    dataNascimento: '',
    genero: '',
    deficiencias: {
      fisica: false,
      auditiva: false,
      visual: false,
      intelectual: false,
      autista: false,
    },
    endereco: {
      cep: '',
      endereco: '',
      numero: '',
      cidade: '',
      estado: '',
    },
    linkedin: '',
    formacao: '',
    curso: '',
    inicioFormacao: '',
    fimFormacao: '',
    idiomas: [{ idioma: '', nivel: '' }],
    certificados: [],
  };


  finalizarCandidatura(){
    this.service.editar(this.candidato).subscribe(() => {
      this.router.navigate(['/menu-candidato'])
    })
  }

  saveDadosPessoais() {
    console.log('Dados pessoais salvos:', this.dadosPessoais);
  }

  saveExperienciaAcademica() {
    console.log('Experiência acadêmica salva.');
  }

  saveIdiomas() {
    console.log('Idiomas salvos.');
  }

  saveCertificados() {
    console.log('Certificados salvos.');
  }

  // adicionarIdioma() {
  //   this.idiomas.push({});
  // }

  adicionarCertificado() {
    this.certificados.push({});
  }

}
