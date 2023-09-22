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
    cnpj:'',
    razaoSocial:'',
    nomeFantasia:'',
    endereco:'',
    numero:'',
    cep:'',
    email:'',
    senha:'',
    confirmacaoSenha:'',
    vagas: [],
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