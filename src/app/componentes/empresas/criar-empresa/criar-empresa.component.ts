import { Component } from '@angular/core';
import { Empresas } from '../empresas';
import { EmpresasService } from '../empresas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-empresa',
  templateUrl: './criar-empresa.component.html',
  styleUrls: ['./criar-empresa.component.css']
})
export class CriarEmpresaComponent {

  empresa:Empresas={
    id:0,
    cnpj:'',
    razaoSocial:'',
    nomeFantasia:'',
    endereco:{
      cep:'',
      rua:'',
      numero:0,
      cidade:'',
      estado:''    
    },
    email:'',
    senha:'',
    linkedin:'',
    siteInstitucional:''
  }

  constructor(private service: EmpresasService, private router: Router){

  }

  criarEmpresa(){
    this.service.criar(this.empresa).subscribe(() => {
      this.router.navigate(['/listarEmpresa'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarEmpresa'])
  }

}