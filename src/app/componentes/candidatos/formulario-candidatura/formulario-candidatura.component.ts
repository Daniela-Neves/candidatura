    import {Component, OnInit} from '@angular/core';
    import {CurriculoService} from '../curriculo.service';
    import {ActivatedRoute, Router} from '@angular/router';
    import {Curriculo} from '../curriculo';
    import { ExperienciaProfissional } from '../experienciaProfissional';
    import { FormacaoAcademica } from '../formacaoAcademica';
    import { Proficiencia } from '../proficiencia';
    import { Certificacao } from '../certificacao';
import { Candidato } from '../candidato';
    
    @Component({
        selector: 'app-formulario-candidatura',
        templateUrl: './formulario-candidatura.component.html',
        styleUrls: ['./formulario-candidatura.component.css'],
      })    
    export class FormularioCandidaturaComponent implements OnInit {
    
        constructor(private service : CurriculoService, private router : Router, private route : ActivatedRoute) {}
    
        ngOnInit(): void {
            const id = this.route.snapshot.paramMap.get('id');
            this.curriculo.candidatoId = Number(id);
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
    
    
        // finalizarCandidatura() {
        //     this.service.salvarDadosPessoais(this.curriculo).subscribe(() => {
        //         this.service.salvarExperienciasProfissionais(this.experienciasProfissionais).subscribe(() => {
        //             this.service.salvarExperienciaAcademica(this.experienciasAcademicas).subscribe(() => {
        //                 this.service.salvarIdioma(this.idiomas).subscribe(() => {
        //                     this.service.salvarCertificado(this.certificados).subscribe(() => {
        //                         alert('Candidatura preenchido com sucesso!');
        //                         this.router.navigate(['/detalhes-vaga', this.curriculo.candidatoId]);
        //                     }, error => this.handleError(error));
        //                 }, error => this.handleError(error));
        //             }, error => this.handleError(error));
        //         }, error => this.handleError(error));
        //     }, error => this.handleError(error));
        // }
        
        private handleError(error: any) {
            console.error('Erro ao finalizar a candidatura:', error);
            alert('Erro ao finalizar a candidatura. Tente novamente mais tarde.');
        }
        
        
        experienciasProfissionais: ExperienciaProfissional[] = [];
    
        adicionarExperienciaProfissional() {
            const newExperienciaProfissional: ExperienciaProfissional = {
                candidatoId: 0,
                curriculo: this.curriculo,
                titulo: '',
                tipoEmprego: '',
                nomeEmpresa: '',
                inicio: '',
                fim: ''
            };
            this.experienciasProfissionais.push(newExperienciaProfissional)
            this.salvarExperienciasProfissionais(newExperienciaProfissional)
        }
    
        excluirExperienciaProfissional(index: number) {
            this.experienciasProfissionais.splice(index, 1);
        }
    
        experienciasAcademicas: FormacaoAcademica[] = [];
    
    
        adicionarExperienciaAcademica() {
          const newExperienciaAcademica: FormacaoAcademica = {
            candidatoId: 0,
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
          const newCertificado: Certificacao = {
            candidatoId: this.candidato.id,
            titulo: '',
            organizacao: '',
            dataEmissao: ''
        };
            this.certificados.push(newCertificado)
        }
        
        excluirCertificado(index: number) {
          this.certificados.splice(index, 1);
      }

        salvarDadosPessoais() {
            this.service.salvarDadosPessoais(this.curriculo).subscribe(response => {
              console.log('Dados pessoais salvos:', response);
            });
          }
        
          salvarExperienciasProfissionais(experiencia:ExperienciaProfissional) {
            this.service.salvarExperienciasProfissionais(experiencia).subscribe(response => {
              console.log('Experiências Profissionais salvas:', response);
            });
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
        
          salvarCertificado(certificados:Certificacao[]) {
            certificados.forEach(certificado => {
              this.service.salvarCertificado(certificado).subscribe(response => {
                console.log('Certificados salvos:', response);
              });
            });
          }
    
          acionarCertificado(){
            this.salvarCertificado(this.certificados)
          }
    
    }
