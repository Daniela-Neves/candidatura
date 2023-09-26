import { ActivatedRoute, Router } from '@angular/router';
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

  formulario!:FormGroup
  passwordStrength: string = '';

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

  constructor(private service: VagasService, private router: Router, private route : ActivatedRoute, private empresaService: EmpresasService, private formBuilder: FormBuilder){

  }



  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.vaga.empresaId = Number(id);
    this.formulario = this.formBuilder.group({
      nome:['', Validators.required],
      tipoVaga: ['', Validators.required],
      dataPulicacao: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      descricao: ['', Validators.required],
      responsabilidades: ['', Validators.required],
      qualificacoes: ['', Validators.required],
      modalidade: ['', Validators.required],
    })
  }


  criarOportunidade(){
    // this.empresaService.criarVaga(1,this.vaga).subscribe(()=>{
    //   this.router.navigate(['/paginaInicialEmpresa'])
    if(this.formulario.valid){
      this.service.criar(this.vaga).subscribe(()=>{
        this.router.navigate(['/paginaInicialEmpresa/',this.route.snapshot.paramMap.get('id')])
      })
    }


  }

  cancelar(){
    this.router.navigate(['/paginaInicialEmpresa',this.route.snapshot.paramMap.get('id')])
  }

}
