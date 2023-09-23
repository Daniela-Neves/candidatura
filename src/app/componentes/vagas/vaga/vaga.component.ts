import { Component, Input, OnInit } from '@angular/core';
import { Vagas } from '../vagas';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.css']
})
export class VagaComponent implements OnInit{

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

  constructor(){

  }

  ngOnInit(): void {

  }

}