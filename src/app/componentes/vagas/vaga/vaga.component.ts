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
  nome:'Dev',
  tipoContratacao:'CLT',
  dataPublicacao:'21/12/1997',
  cidade:'Nhandeara',
  estado:'SP',
  salario:'1200',
  sobreAVaga:'Desenvolver',
  responsabilidades:'Desenvolver',
  qualificacoes:'Contar até 3',
  modalidade:'Presencial',
  candidatos: [],
  statusProcesso:'FINALIZADO'

  }

  constructor(){

  }

  ngOnInit(): void {

  }

}