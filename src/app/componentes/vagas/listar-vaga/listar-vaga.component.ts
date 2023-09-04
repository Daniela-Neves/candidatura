import { Component, OnInit } from '@angular/core';
import { Vagas } from '../vagas';
import { VagasService } from '../vagas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-vaga',
  templateUrl: './listar-vaga.component.html',
  styleUrls: ['./listar-vaga.component.css']
})
export class ListarVagaComponent implements OnInit{

  listaVagas:Vagas[] = []

  constructor(
    private service: VagasService,
    private router: Router,
    private route: ActivatedRoute
    ){

  }
  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id')
    // this.service.buscarPorId(parseInt(id!)).subscribe((vagas) => {
    //   this.vagas = vagas
    // })

    this.service.listar().subscribe((listaVagas) => {
      this.listaVagas = listaVagas
    })
  }

  editarEmpresa(){
    this.service.editar(this.vagas).subscribe(() => {
      this.router.navigate(['/listarVagas'])
    })
  }

  cancelar(){
    this.router.navigate(['/paginaInicialEmpresa'])
  }

  vagas:Vagas={
    nome:'',
    tipoContratacao:'',
    dataPublicacao:'',
    cidade:'',
    estado:'',
    remuneracao:'',
    sobreAVaga:'',
    responsabilidades:'',
    qualificacoes:'',
  }

}
