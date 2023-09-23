import { Component, OnInit } from '@angular/core';
import { Candidato } from '../candidato';
import { CandidatoService } from '../candidato.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-candidatura',
  templateUrl: './formulario-candidatura.component.html',
  styleUrls: ['./formulario-candidatura.component.css'],
})
export class FormularioCandidaturaComponent implements OnInit {
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
        confirmacaoSenha:'',
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


    finalizarCandidatura() {
        this.service.editar(this.candidato).subscribe(() => {
          alert('Candidatura enviada com sucesso!');
          this.router.navigate(['/detalhes-vaga', this.candidato.id]);
        });
    }

    adicionarIdioma() {
        this.candidato.idiomas.push({ idioma: '', nivel: '' });
    }

    adicionarCertificado() {
        this.candidato.certificados.push({ nome: '', organizacao: '', dataEmissao: '' });
    }

}
