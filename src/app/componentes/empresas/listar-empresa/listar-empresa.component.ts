import { Component, OnInit } from '@angular/core';
import { Empresas } from '../empresas';
import { EmpresasService } from '../empresas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-empresa',
  templateUrl: './listar-empresa.component.html',
  styleUrls: ['./listar-empresa.component.css']
})
export class ListarEmpresaComponent implements OnInit{

  constructor(
    private service: EmpresasService,
    private router: Router,
    private route: ActivatedRoute
    ){

  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((empresa) => {
      this.empresa = empresa
    })
  }

  editarEmpresa(){
    this.service.editar(this.empresa).subscribe(() => {
      this.router.navigate(['/listarEmpresa'])
    })
  }

  cancelar(){
    this.router.navigate(['/listarEmpresa'])
  }

  empresa:Empresas={
    cnpj:'',
    razaoSocial:'',
    endereco:'',
    numero:'',
    email:'',
    senha:'',
    confirmacaoSenha:'',
    vagas:[]
  }

}
