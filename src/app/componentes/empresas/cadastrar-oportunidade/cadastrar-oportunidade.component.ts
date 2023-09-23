import { ActivatedRoute, Router } from '@angular/router';
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
  empresaId:0,
  nome:'',
  tipoVaga:'',
  dataPublicacao:'',
  cidade:'',
  estado:'',
  salario:'',
  descricao:'',
  responsabilidades:'',
  qualificacoes:'',
  modalidade:''
  }

  constructor(private service: VagasService, private router: Router, private route : ActivatedRoute, private empresaService: EmpresasService){

  }



  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.vaga.empresaId = Number(id);
  }


  criarOportunidade(){
    // this.empresaService.criarVaga(1,this.vaga).subscribe(()=>{
    //   this.router.navigate(['/paginaInicialEmpresa'])
    this.service.criar(this.vaga).subscribe(()=>{
      this.router.navigate(['/paginaInicialEmpresa'])
    })


  }

  cancelar(){
    this.router.navigate(['/paginaInicialEmpresa'])
  }

}