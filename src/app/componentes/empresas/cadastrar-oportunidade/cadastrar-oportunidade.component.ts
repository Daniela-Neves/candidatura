import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Vagas } from '../../vagas/vagas';
import { VagasService } from '../../vagas/vagas.service';

import { EmpresasService } from '../empresas.service';
import { Empresas } from '../empresas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastrar-oportunidade',
  templateUrl: './cadastrar-oportunidade.component.html',
  styleUrls: ['./cadastrar-oportunidade.component.css']
})
export class CadastrarOportunidadeComponent implements OnInit{

  formulario!: FormGroup;

  constructor(private service: VagasService, private router: Router, private empresaService: EmpresasService, private formBuilder: FormBuilder){

  }

  vaga:Vagas={
  id:0,
  nome:'',
  tipoContratacao:'',
  dataPublicacao:'',
  cidade:'',
  estado:'',
  salario:'',
  sobreAVaga:'',
  responsabilidades:'',
  qualificacoes:'',
  modalidade:'',
  candidatos: [],
  statusProcesso:''
  }

  empresa:Empresas={
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


  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      tipoContratacao: ['', Validators.required],
      dataPublicacao: ['', Validators.required],
      cidade: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      estado: ['', Validators.compose([Validators.required, Validators.maxLength(2), Validators.minLength(2), Validators.pattern(/^[A-Z]+$/)])],
      salario: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+'), // Aceita apenas números
      ]),],
      modalidade: ['', Validators.required],
      sobreAVaga: ['', Validators.required],
      responsabilidades: ['', Validators.required],
      qualificacoes: ['', Validators.required],
    });

    this.empresaService.buscarPorId(1).subscribe((empresa: Empresas) => {
      this.empresa = empresa;
    });
  }


  criarOportunidade(){
    // this.empresaService.criarVaga(1,this.vaga).subscribe(()=>{
    //   this.router.navigate(['/paginaInicialEmpresa'])
    // })
    if(this.formulario.valid){
      const novaVaga = this.formulario.value
      this.vaga.id = this.service.gerarID()
    this.empresa.vagas.push(novaVaga)
    this.empresaService.editar(this.empresa).subscribe(() => {
      this.router.navigate(['/paginaInicialEmpresa']);
    });
    }


  }

  cancelar(){
    this.router.navigate(['/paginaInicialEmpresa'])
  }

  habilitarBotao():string{
    if(this.formulario.valid){
      return 'cadastro-button'
    }
    else{
      return 'botao__desabilitado'
    }
  }

}
