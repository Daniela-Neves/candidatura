import { Component, Input, OnInit } from '@angular/core';
import { Candidato } from '../candidato';


@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent implements OnInit{

  @Input() candidato: Candidato = {
    id: 0,
    nome: 'Gabriel',
    sobrenome: 'Morais',
    email: 'gabrielc_morais@hotmail.com',
    senha: '1234',
    confirmacaoSenha: '1234'
  }

  constructor(){

  }

  ngOnInit(): void {

  }

}
