import { Component, OnInit } from '@angular/core';
import { Candidato } from '../candidato';
import { CandidatoService } from '../candidato.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-candidato',
  templateUrl: './editar-candidato.component.html',
  styleUrls: ['./editar-candidato.component.css']
})
export class EditarCandidatoComponent implements OnInit{

  confirmacaoSenhaDigitada: string = '';

  constructor(
    private service: CandidatoService,
    private router: Router,
    private route: ActivatedRoute
    ){

  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((candidato) => {
      this.candidato = candidato
    })
  }

  editarCandidato(){
    if (this.candidato.senha !== this.confirmacaoSenhaDigitada) {
      alert('A senha e a confirmação de senha não correspondem.');
      return;
    }

    this.service.editar(this.candidato).subscribe(() => {
      this.router.navigate(['/menu-candidato', this.candidato.id]);

    })
  }

  cancelar(){
    this.router.navigate(['/menu-candidato', this.candidato.id]);
  }

  candidato : Candidato = {
    id: 0,
    nome: '',
    sobrenome: '',
    email: '',
    senha: ''
};

}
