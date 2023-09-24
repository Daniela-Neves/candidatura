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
    private empresaService: EmpresasService,
    private route: ActivatedRoute
    ){

  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    console.log('este é o id',id);
    
    // this.service.buscarPorId(parseInt(id!)).subscribe((vagas) => {
    //   this.vagas = vagas
    // })

    this.service.listarPorEmpresa(Number(id)).subscribe((vagas) => {
      this.listaVagas = vagas
      
    })
  }

  editarEmpresa(){
    this.service.editar(this.vagas).subscribe(() => {
      this.router.navigate(['/listarVagas'])
    })
  }

  cancelar(){
    const id = this.route.snapshot.paramMap.get('id')
    this.router.navigate(['/paginaInicialEmpresa/',id])
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