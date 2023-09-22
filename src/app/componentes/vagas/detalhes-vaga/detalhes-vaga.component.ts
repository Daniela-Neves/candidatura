import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VagasService } from '../vagas.service';
import { Vagas } from '../vagas';
import { Candidato } from '../../candidatos/candidato';


@Component({
  selector: 'app-detalhes-vaga',
  templateUrl: './detalhes-vaga.component.html',
  styleUrls: ['./detalhes-vaga.component.css']
})
export class DetalhesVagaComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,

    private vagaService: VagasService
  ) { }

  vaga:Vagas = {
    // id?":number"
    nome:"",
    tipoContratacao:"",
    dataPublicacao:"",
    cidade:"",
    estado:"",
    remuneracao:"",
    sobreAVaga:"",
    responsabilidades:"",
    qualificacoes:"",
    modalidade:"",
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


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      if (idParam !== null) {
        const vagaId = +idParam;
        if (!isNaN(vagaId)) {
          // Continuar com a lógica para buscar a vaga
          this.vagaService.buscarPorId(parseInt(idParam!)).subscribe((vaga) => {
            this.vaga = vaga
          })

        } else {
          console.error('ID da vaga não é um número válido.');
          this.router.navigate(['/vagas']);
        }
      } else {
        console.error('ID da vaga não está presente nos parâmetros da rota.');
        this.router.navigate(['/vagas']);
      }
    });

  }
}
