import { Component } from '@angular/core';
import { Vagas } from '../../vagas/vagas';
import { VagasService } from '../../vagas/vagas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-oportunidade',
  templateUrl: './cadastrar-oportunidade.component.html',
  styleUrls: ['./cadastrar-oportunidade.component.css']
})
export class CadastrarOportunidadeComponent {

  vaga:Vagas={
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

  constructor(private service: VagasService, private router: Router){

  }

  criarOportunidade(){
    this.service.criar(this.vaga).subscribe(()=>{
      this.router.navigate(['/paginaInicialEmpresa'])
    })
  }

  cancelar(){
    this.router.navigate(['/paginaInicialEmpresa'])
  }

}
