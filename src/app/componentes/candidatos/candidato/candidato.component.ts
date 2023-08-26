import { Component, Input, OnInit } from '@angular/core';
import { Candidato } from '../candidato';
import { CandidatoService } from '../candidato.service';
import { Router } from 'express';

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
    senha: '1234'
  }

  constructor(){

  }

  ngOnInit(): void {

  }

}
