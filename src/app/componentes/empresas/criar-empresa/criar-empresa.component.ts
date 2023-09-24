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
        cep: ['', Validators.required], // Campo CEP com validação
        rua: ['', Validators.required], // Outros campos do endereço com validação
        numero: ['', Validators.required],
      }),
      razaoSocial: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      linkedin: ['', Validators.required],
      siteInstitucional: ['', Validators.required]
    });

  }

  criarEmpresa(){
    if(this.formulario.valid){
      this.service.criar(this.empresa).subscribe(() => {
        this.router.navigate(['/listarEmpresa'])
      })
    }
  }

  confirmacaoSenha:string = ''

  cancelar() {
    this.router.navigate(['/listarEmpresa'])
  }

  habilitarBotao():string{
    if(this.formulario.valid){
      return 'botao'
    }
    else{
      return 'botao__desabilitado'
    }
  }

}
