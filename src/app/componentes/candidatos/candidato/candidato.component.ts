import { Component, Input, OnInit } from '@angular/core';
import { Candidato } from '../candidato';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent implements OnInit {
  @Input() candidato: Candidato = {
    id: 0,
    nome: 'Gabriel',
    sobrenome: 'Morais',
    email: 'gabrielc_morais@hotmail.com',
    senha: '1234',
    dataNascimento: '',
    genero: '',
    identificacao: '',
    deficiencias: {
        fisica: false,
        auditiva: false,
        visual: false,
        intelectual: false,
        autista: false
    },
    endereco: {
        cep: '',
        endereco: '',
        numero: '',
        cidade: '',
        estado: ''
    },
    linkedin: '',
    formacao: {
        fundamental: '',
        ensinoMedio: '',
        ensinoSuperior: '',
        mestrado: '',
        doutorado: '',
        inicio: '',
        fim: ''
    },
    idiomas: [
        {
            idioma: '',
            nivel: ''
        }
    ],
    certificados: [
        {
            nome: '',
            organizacao: '',
            dataEmissao: ''
        }
    ],
    experiencia: {
        titulo: '',
        tipoEmprego: '',
        nomeEmpresa: '',
        inicio: '',
        fim: ''
    }
};

  constructor() {}

  ngOnInit(): void {}
}
