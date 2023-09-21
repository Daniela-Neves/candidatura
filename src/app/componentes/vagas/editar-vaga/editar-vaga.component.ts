import { Component, OnInit } from '@angular/core';
import { Vagas } from '../vagas';
import { VagasService } from '../vagas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-vaga',
  templateUrl: './editar-vaga.component.html',
  styleUrls: ['./editar-vaga.component.css']
})
export class EditarVagaComponent implements OnInit{

  vaga:Vagas={
  nome:'',
  tipoContratacao:'',
  dataPublicacao:'',
  cidade:'',
  estado:'',
  salario:'',
  sobreAVaga:'',
  responsabilidades:'',
  qualificacoes:'',
  modalidade:'',
  candidatos: [],
  statusProcesso:''
    }


    constructor(private service: VagasService, private router: Router, private route: ActivatedRoute){

    }
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      this.service.buscarPorId(parseInt(id!)).subscribe((vaga) => {
        this.vaga = vaga
      })
    }


    editarEmpresa(){
      this.service.editar(this.vaga).subscribe(() => {
        this.router.navigate(['/listarVagas'])
      })
    }

    cancelar(){
      this.router.navigate(['/paginaInicialEmpresa'])
    }

}
