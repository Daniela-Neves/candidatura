import {Component, OnInit} from '@angular/core';
import {CandidatoService} from '../candidato.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Candidato} from '../candidato';

@Component({selector: 'app-formulario-curriculo', templateUrl: './formulario-curriculo.component.html', styleUrls: ['./formulario-curriculo.component.css']})

export class FormularioCurriculoComponent implements OnInit {
    certificados : any[] = [];
    // idiomas: any[] = [{ idioma: '', nivel: '' }];

    constructor(private service : CandidatoService, private router : Router, private route : ActivatedRoute) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id')
        this.service.buscarPorId(parseInt(id !)).subscribe((candidato) => {
            this.candidato = candidato
        })
    }

    candidato : Candidato = {
        id: 0,
        nome: '',
        sobrenome: '',
        email: '',
        senha: '',
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


    finalizarCurriculo() {
        this.service.editar(this.candidato).subscribe(() => {
            alert('Currículo preenchido com sucesso!');
            this.router.navigate(['/menu-candidato', this.candidato.id]);
        });
    }

    // saveDadosPessoais() {
    // console.log('Dados pessoais salvos:', this.dadosPessoais);
    // }

    // saveExperienciaAcademica() {
    // console.log('Experiência acadêmica salva.');
    // }

    // saveIdiomas() {
    // console.log('Idiomas salvos.');
    // }

    // saveCertificados() {
    // console.log('Certificados salvos.');
    // }

    // adicionarIdioma() {
    // this.idiomas.push({});
    // }

    // adicionarCertificado() {
    // this.certificados.push({});
    // }

    adicionarIdioma() {
        this.candidato.idiomas.push({ idioma: '', nivel: '' });
    }
    
    adicionarCertificado() {
        this.candidato.certificados.push({ nome: '', organizacao: '', dataEmissao: '' });
    }

}
