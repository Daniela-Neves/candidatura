import {Component, OnInit} from '@angular/core';
import {CurriculoService} from '../curriculo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Curriculo} from '../curriculo';
import { ExperienciaProfissional } from '../experienciaProfissional';
import { FormacaoAcademica } from '../formacaoAcademica';
import { Proficiencia } from '../proficiencia';
import { Certificacao } from '../certificacao';
import { Candidato } from '../candidato';
import { CandidatoService } from '../candidato.service';

@Component({selector: 'app-formulario-curriculo', templateUrl: './formulario-curriculo.component.html', styleUrls: ['./formulario-curriculo.component.css']})

export class FormularioCurriculoComponent implements OnInit {

    constructor(private service : CurriculoService, private router : Router, private route : ActivatedRoute, private candidatoService:CandidatoService) {}
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.curriculo.candidatoId = Number(id);
      this.candidatoService.buscarPorId(Number(id)).subscribe((candidato) => {
        this.candidato = candidato
      })
    }
  
    candidato : Candidato = {
      id: 0,
      nome: '',
      sobrenome: '',
      email: '',
      senha: ''
  };

    curriculo : Curriculo = {
        candidatoId: 0,
        candidato:this.candidato,
        dataNascimento: '',
        genero: '',
        raca: '',
        deficiencias: {
            fisica: false,
            auditiva: false,
            visual: false,
            intelectual: false,
            autista: false
        },
        endereco: {
            cep: '',
            rua: '',
            numero: '',
            cidade: '',
            estado: ''
        },
        linkedin: ''
    };
    
    experienciasProfissionais: ExperienciaProfissional[] = [];

    adicionarExperienciaProfissional() {
      const newExperienciaProfissional: ExperienciaProfissional = {
        candidatoId: this.candidato.id,
        curriculo: this.curriculo,
        titulo: '',
        tipoEmprego: '',
        nomeEmpresa: '',
        inicio: '',
        fim: ''
    };
        this.experienciasProfissionais.push(newExperienciaProfissional)
      //this.salvarExperienciasProfissionais(newExperienciaProfissional)
    }

    excluirExperienciaProfissional(index: number) {
        this.experienciasProfissionais.splice(index, 1);
    }

    experienciasAcademicas: FormacaoAcademica[] = [];


    adicionarExperienciaAcademica() {
      const newExperienciaAcademica: FormacaoAcademica = {
        candidatoId: this.candidato.id,
        curriculo: this.curriculo,
        nivelFormacao: '',
        curso: '',
        dataInicio: '',
        dataFim: ''
    };
        this.experienciasAcademicas.push(newExperienciaAcademica)
      //this.salvarExperienciasProfissionais(newExperienciaProfissional)
    }

    excluirExperienciaAcademica(index: number) {
        this.experienciasAcademicas.splice(index, 1);
    }

    idiomas: Proficiencia[] = [];

    adicionarIdioma() {
        this.idiomas.push({
            candidatoId: 0, 
            idiomaId: 0,    
            nivelProficiencia: ''
        });
    }

    excluirIdioma(index: number) {
        this.idiomas.splice(index, 1);
    }

    certificados: Certificacao[] = [];

    adicionarCertificado() {
        this.certificados.push({
            candidatoId: 0,  // Atualize conforme necessário
            titulo: '',
            organizacao: '',
            dataEmissao: ''
        });
    }

    excluirCertificado(index: number) {
        this.certificados.splice(index, 1);
    }
    
    salvarDadosPessoais() {
        this.service.salvarDadosPessoais(this.curriculo).subscribe(response => {
          console.log('Dados pessoais salvos:', response);
        });
      }
    
      salvarExperienciasProfissionais(experiencias:ExperienciaProfissional[]) {
        experiencias.forEach(experiencia => {
          this.service.salvarExperienciasProfissionais(experiencia).subscribe(response => {
            console.log('Experiências Profissionais salvas:', response);
          });
        });
      }

      acionaExperienciasProfissionais(){
        this.salvarExperienciasProfissionais(this.experienciasProfissionais)
      }

      salvarExperienciaAcademica(experiencias:FormacaoAcademica[]) {
        experiencias.forEach(experiencia => {
          this.service.salvarExperienciaAcademica(experiencia).subscribe(response => {
            console.log('Experiências Acadêmicas salvas:', response);
          });
        });
      }

      acionaExperienciasAcademica(){
        this.salvarExperienciaAcademica(this.experienciasAcademicas)
      }
    
      salvarIdioma() {
        this.service.salvarIdioma(this.idiomas).subscribe(response => {
          console.log('Idiomas salvos:', response);
        });
      }
    
      salvarCertificado() {
        this.service.salvarCertificado(this.certificados).subscribe(response => {
          console.log('Certificados salvos:', response);
        });
      }

}
