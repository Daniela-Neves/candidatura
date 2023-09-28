import { Component, Input, OnInit } from '@angular/core';
import { Vagas } from '../vagas';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.css']
})
export class VagaComponent implements OnInit{

  idEmpresa=0;

  @Input() vagas: Vagas = {

  id:0,
  empresaId:0,
  nome:'Dev',
  tipoVaga:'CLT',
  dataPublicacao:'21/12/1997',
  cidade:'Nhandeara',
  estado:'SP',
  salario:'1200',
  descricao:'Desenvolver',
  responsabilidades:'Desenvolver',
  qualificacoes:'Contar até 3',
  modalidade:'Presencial',
  statusProcesso:'FINALIZADO'

  }

  constructor(
    private router: Router,
    private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.idEmpresa = Number(this.route.snapshot.paramMap.get('id'))
    console.log('este é i id',this.idEmpresa);
    
  }

}