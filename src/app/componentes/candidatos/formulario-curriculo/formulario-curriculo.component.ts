import {Component, OnInit} from '@angular/core';
import {CurriculoService} from '../curriculo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Curriculo} from '../curriculo';
import { ExperienciaProfissional } from '../experienciaProfissional';
import { FormacaoAcademica } from '../formacaoAcademica';
import { Proficiencia } from '../proficiencia';
import { Certificacao } from '../certificacao';

@Component({selector: 'app-formulario-curriculo', templateUrl: './formulario-curriculo.component.html', styleUrls: ['./formulario-curriculo.component.css']})

export class FormularioCurriculoComponent implements OnInit {

    constructor(private service : CurriculoService, private router : Router, private route : ActivatedRoute) {}


    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.curriculo.candidatoId = Number(id);
    }
  
    

    curriculo : Curriculo = {
        candidatoId: 0,
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
            endereco: '',
            numero: '',
            cidade: '',
            estado: ''
        },
        linkedin: ''
    };
    
    finalizarCurriculo() {      
        this.service.salvarDadosPessoais(this.curriculo).subscribe(() => {
          this.service.salvarExperienciasProfissionais(this.experienciasProfissionais).subscribe(() => {
            this.service.salvarExperienciaAcademica(this.experienciasAcademicas).subscribe(() => {
              this.service.salvarIdioma(this.idiomas).subscribe(() => {
                this.service.salvarCertificado(this.certificados).subscribe(() => {
                  alert('Currículo preenchido com sucesso!');
                  this.router.navigate(['/menu-curriculo', this.curriculo.candidatoId]);
                }, error => this.handleError(error));
              }, error => this.handleError(error));
            }, error => this.handleError(error));
          }, error => this.handleError(error));
        }, error => this.handleError(error));
      }
      

    private handleError(error: any) {
        console.error('Erro ao finalizar o currículo:', error);
        alert('Erro ao finalizar o currículo. Tente novamente mais tarde.');
    }
    

    experienciasProfissionais: ExperienciaProfissional[] = [];

    adicionarExperienciaProfissional() {
        this.experienciasProfissionais.push({
            candidatoId: 0,
            titulo: '',
            tipoEmprego: '',
            nomeEmpresa: '',
            inicio: '',
            fim: ''
        });
    }

    excluirExperienciaProfissional(index: number) {
        this.experienciasProfissionais.splice(index, 1);
    }

    experienciasAcademicas: FormacaoAcademica[] = [];


    adicionarExperienciaAcademica() {
        this.experienciasAcademicas.push({
            candidatoId: 0, 
            nivelFormacao: '',
            curso: '',
            dataInicio: '',
            dataFim: ''
        });
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
    
      salvarExperienciasProfissionais() {
        this.service.salvarExperienciasProfissionais(this.experienciasProfissionais).subscribe(response => {
          console.log('Experiências Profissionais salvas:', response);
        });
      }
    
      salvarExperienciaAcademica() {
        this.service.salvarExperienciaAcademica(this.experienciasAcademicas).subscribe(response => {
          console.log('Experiências Acadêmicas salvas:', response);
        });
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
