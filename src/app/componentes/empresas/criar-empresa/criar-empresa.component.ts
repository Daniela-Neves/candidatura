import { Component, OnInit } from '@angular/core';
import { Empresas } from '../empresas';
import { EmpresasService } from '../empresas.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    endereco:'',
    numero:'',
    cep:'',
    email:'',
    senha:'',
    confirmacaoSenha:'',
    vagas: [],
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
      razaoSocial: ['', Validators.required],
      endereco: ['', Validators.required],
      numero: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+')
      ])],
      cep: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(8),
        Validators.maxLength(8)
      ])],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      confirmacaoSenha: ['', Validators.required],
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

  cancelar() {
    this.router.navigate(['/loginEmpresa'])
  }

}
