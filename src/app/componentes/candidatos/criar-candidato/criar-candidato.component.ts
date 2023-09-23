import { Component, OnInit } from '@angular/core';
import { Candidato } from '../candidato';
import { CandidatoService } from '../candidato.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-candidato',
  templateUrl: './criar-candidato.component.html',
  styleUrls: ['./criar-candidato.component.css']
})
export class CriarCandidatoComponent implements OnInit{

  formulario!: FormGroup

  candidato : Candidato = {
    id: 0,
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    confirmacaoSenha:'',
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

  constructor(private service: CandidatoService, private router: Router, private formBuilder: FormBuilder){

  }
  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      senha: ['', Validators.required],
      confirmacaoSenha: ['', Validators.required]
    },
    {
      validators: this.senhaMatchValidator
    })

  }

  senhaMatchValidator(form: FormGroup) {
    const senha = form.get('senha');
    const confirmacaoSenha = form.get('confirmacaoSenha');

    if (senha && confirmacaoSenha && senha.value !== confirmacaoSenha.value) {
      confirmacaoSenha.setErrors({ senhaNaoCoincide: true });
    } else {
      confirmacaoSenha!.setErrors(null);
    }
  }

  criarCandidato() {
    if(this.formulario.valid){
      this.service.criar(this.candidato).subscribe(() => {
        this.router.navigate(['/login']);
      });
    }

  }

  habilitarBotao():string{
    if(this.formulario.valid){
      return 'botao'
    }
    else{
      return 'botao__desabilitado'
    }
  }


  cancelar() {
    this.router.navigate(['/login'])
  }

}
