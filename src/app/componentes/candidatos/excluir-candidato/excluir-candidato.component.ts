import { Component, OnInit } from '@angular/core';
import { Candidato } from '../candidato';
import { CandidatoService } from '../candidato.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-candidato',
  templateUrl: './excluir-candidato.component.html',
  styleUrls: ['./excluir-candidato.component.css']
})
export class ExcluirCandidatoComponent implements OnInit{

  candidato : Candidato = {
    id: 0,
    nome: '',
    sobrenome: '',
    email: '',
    senha: ''
};

  constructor(
    private service: CandidatoService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((candidato) => {
      this.candidato = candidato
    })
  }

  excluirCandidato(){
    if(this.candidato.id){
      this.service.excluir(this.candidato.id).subscribe(() => {
        this.router.navigate(['/listarCandidato'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarCandidato'])
  }

}
