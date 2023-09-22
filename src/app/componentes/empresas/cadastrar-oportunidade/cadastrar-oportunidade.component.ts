import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Vagas } from '../../vagas/vagas';
import { VagasService } from '../../vagas/vagas.service';

import { EmpresasService } from '../empresas.service';
import { Empresas } from '../empresas';


@Component({
  selector: 'app-cadastrar-oportunidade',
  templateUrl: './cadastrar-oportunidade.component.html',
  styleUrls: ['./cadastrar-oportunidade.component.css']
})
export class CadastrarOportunidadeComponent implements OnInit{

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

  constructor(private service: VagasService, private router: Router, private empresaService: EmpresasService){

  }

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


  ngOnInit(): void {
    this.empresaService.buscarPorId(1).subscribe((empresa: Empresas) => {
      this.empresa = empresa
    })
  }


  criarOportunidade(){
    // this.empresaService.criarVaga(1,this.vaga).subscribe(()=>{
    //   this.router.navigate(['/paginaInicialEmpresa'])
    // })
    this.vaga.id = this.service.gerarID()
    // this.empresa.vagas.push(this.vaga)
    this.empresaService.editar(this.empresa).subscribe(() => {
      this.router.navigate(['/paginaInicialEmpresa']);
    });


  }

  cancelar(){
    this.router.navigate(['/paginaInicialEmpresa'])
  }

}