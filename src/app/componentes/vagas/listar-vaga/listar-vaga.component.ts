import { Component, OnInit } from '@angular/core';
import { Vagas } from '../vagas';
import { VagasService } from '../vagas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresasService } from '../../empresas/empresas.service';

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
    private empresaService: EmpresasService
    ){

  }
  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id')
    // this.service.buscarPorId(parseInt(id!)).subscribe((vagas) => {
    //   this.vagas = vagas
    // })

    this.empresaService.buscarPorId(1).subscribe((empresa) => {
      // this.listaVagas = empresa.vagas
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

}