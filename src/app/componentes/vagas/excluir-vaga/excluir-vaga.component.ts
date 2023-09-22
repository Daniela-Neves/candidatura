import { Component } from '@angular/core';
import { VagasService } from '../vagas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vagas } from '../vagas';

@Component({
  selector: 'app-excluir-vaga',
  templateUrl: './excluir-vaga.component.html',
  styleUrls: ['./excluir-vaga.component.css']
})
export class ExcluirVagaComponent {

  vaga:Vagas={
    id:0,
    nome:'',
    tipoContratacao:'',
    dataPublicacao:'',
    cidade:'',
    estado:'',
    remuneracao:'',
    sobreAVaga:'',
    responsabilidades:'',
    qualificacoes:'',
    modalidade:''
    }

  constructor(
    private service: VagasService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((vaga) => {
      this.vaga = vaga
    })
  }

  excluirVaga(){
    if(this.vaga.id){
      this.service.excluir(this.vaga.id).subscribe(() => {
        this.router.navigate(['/listarVagas'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarVagas'])
  }

}
