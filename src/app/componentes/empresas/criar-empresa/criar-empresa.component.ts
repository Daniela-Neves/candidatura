import { Component, OnInit } from '@angular/core';
import { Empresas } from '../empresas';
import { EmpresasService } from '../empresas.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-empresa',
  templateUrl: './criar-empresa.component.html',
  styleUrls: ['./criar-empresa.component.css']
})
export class CriarEmpresaComponent implements OnInit{

  formulario!:FormGroup
  passwordStrength: string = '';
  mostrarinformacoesSenha = false

  empresa:Empresas={
    id:0,
    cnpj:'',
    razaoSocial:'',
    nomeFantasia:'',
    endereco:{
      cep:'',
      rua:'',
      numero:0,
      cidade:'',
      estado:''
    },
    email:'',
    senha:'',
    linkedin:'',
    siteInstitucional:''
  }

  constructor(private service: EmpresasService, private router: Router, private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      cnpj: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(14),
        Validators.maxLength(14)
      ])],
      endereco: this.formBuilder.group({
        cep: ['', Validators.compose([
          Validators.pattern('[0-9]+'),
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8)
        ])], // Campo CEP com validação
        rua: ['', Validators.required], // Outros campos do endereço com validação
        numero: ['', Validators.compose([
          Validators.pattern('[0-9]+'),
          Validators.required,
        ])],
      }),
      razaoSocial: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      confirmacaoSenha:['', Validators.required],
      linkedin: ['', Validators.required],
      siteInstitucional: ['', Validators.required],
      nomeFantasia : ['']
    },
    {
      validators: this.senhaMatchValidator
    });

    this.formulario.get('senha')?.valueChanges.subscribe(() => {
      this.checkRequirements();
    });

    this.formulario.get('senha')?.valueChanges.subscribe(() => {
      this.checkPasswordStrength();
    });

  }

  criarEmpresa(){
    if(this.formulario.valid){
      this.service.criar(this.empresa).subscribe(() => {
        this.router.navigate(['/loginEmpresa'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/loginEmpresa'])
  }

  habilitarBotao():string{
    if(this.formulario.valid){
      return 'botao'
    }
    else{
      return 'botao__desabilitado'
    }
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

  isPasswordValid(type: string): boolean {
    const senha = this.formulario.get('senha')?.value;

    switch (type) {
      case 'length':
        return senha.length >= 8;
      case 'uppercase':
        return /[A-Z]/.test(senha);
      case 'lowercase':
        return /[a-z]/.test(senha);
      case 'number':
        return /\d/.test(senha);
      case 'special':
        return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(senha);
      default:
        return false;
    }
  }

  allRequirementsMet = false;

  checkRequirements() {
    const requirements = [
      this.isPasswordValid('length'),
      this.isPasswordValid('uppercase'),
      this.isPasswordValid('lowercase'),
      this.isPasswordValid('number'),
      this.isPasswordValid('special'),
    ];

    // Verifique se todos os requisitos são verdadeiros
    this.allRequirementsMet = requirements.every(req => req === true);
  }

  checkPasswordStrength() {
    const password = this.formulario.get('senha')?.value;
    let score = 0;

    // Pontue cada requisito atendido
    if (/[a-z]/.test(password)) {
      score += 1;
    }
    if (/[A-Z]/.test(password)) {
      score += 1;
    }
    if (/[0-9]/.test(password)) {
      score += 1;
    }
    if (/[!@#$%^&*()_+[\]{};':"\\|,.<>/?]+/.test(password)) {
      score += 1;
    }
    if (password.length >= 8) {
      score += 1;
    }

    // Defina a força com base na pontuação
    if (score <= 2) {
      this.passwordStrength = 'Fraca';
    } else if (score <= 4) {
      this.passwordStrength = 'Média';
    } else {
      this.passwordStrength = 'Forte';
    }
  }



}
