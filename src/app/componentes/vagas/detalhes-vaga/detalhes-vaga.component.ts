import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VagasService } from '../vagas.service';
import { Vagas } from '../vagas';
import { Candidato } from '../../candidatos/candidato';
import { InscricaoService } from '../inscricao.service';
import { Inscricao } from '../inscricao';


@Component({
  selector: 'app-detalhes-vaga',
  templateUrl: './detalhes-vaga.component.html',
  styleUrls: ['./detalhes-vaga.component.css']
})
export class DetalhesVagaComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private incricaoService:InscricaoService,
    private vagaService: VagasService
  ) { }

  vaga:Vagas = {
  empresaId:0,
  nome:'',
  tipoVaga:'',
  dataPublicacao:'',
  cidade:'',
  estado:'',
  salario:'',
  descricao:'',
  responsabilidades:'',
  qualificacoes:'',
  modalidade:'',
  statusProcesso:''
  }

  candidato : Candidato = {
    id: 0,
    nome: '',
    sobrenome: '',
    email: '',
    senha: ''
};

  inscricao:Inscricao = {
    candidatoId: Number(this.route.snapshot.paramMap.get('candidatoId')),
    vagaId: String(this.route.snapshot.paramMap.get('id'))
  }
  

  candidatar(){
    console.log();
    
    // this.incricaoService.criar(this.inscricao)
    
    // this.router.navigate(['/buscar-vagas/',this.incricao.candidatoId]);
    this.incricaoService.criar(this.inscricao).subscribe(() => {
      this.router.navigate(['/buscar-vagas/',this.inscricao.candidatoId]);
      alert('Inscrição realiza com sucesso!');
    });
  }

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
