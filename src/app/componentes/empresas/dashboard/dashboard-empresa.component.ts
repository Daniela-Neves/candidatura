import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CandidatoService } from '../../candidatos/candidato.service';
import { Candidato } from '../../candidatos/candidato';
import { EmpresasService } from '../empresas.service';
import { Empresas } from '../empresas';
import { VagasService } from '../../vagas/vagas.service';
import { Vagas } from '../../vagas/vagas';
import { ActivatedRoute, Router } from '@angular/router';
import { InscricaoService } from '../../vagas/inscricao.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-empresa.component.html',
  styleUrls: ['./dashboard-empresa.component.css']
})
export class DashboardEmpresaComponent implements OnInit{
  listaCandidatos:Candidato[]=[]
  listaEmpresas:Empresas[]=[]
  listaVagas:Vagas[]=[]
  qtdInscricoes:number = 0;
  
  ngOnInit(){
    
    // const id = this.route.snapshot.paramMap.get('id');

    this.candidatoService.listar().subscribe((listaCandidatos) => {
      this.listaCandidatos = listaCandidatos
      
    })

    this.empresaService.listar().subscribe((listaEmpresas)=>{
      this.listaEmpresas = listaEmpresas;
    })

    this.vagasService.listar().subscribe((listaVagas)=>{
      this.listaVagas = listaVagas;
    })
    
    this.inscricaoService.listarPorEmpresa(Number(this.route.snapshot.paramMap.get('id'))).subscribe((qtdInscricoes) => {
     console.log("metodo retornou inscricoes", qtdInscricoes)
      this.qtdInscricoes = Number(qtdInscricoes)
      
    })

  }

  // cancelar(){
  //   const id = this.route.snapshot.paramMap.get('id')
  //   this.router.navigate(['/menu-em',this.route.snapshot.paramMap.get('id')])
  // }


  constructor(private breakpointObserver: BreakpointObserver, private candidatoService : CandidatoService, 
    private empresaService:EmpresasService, private vagasService:VagasService, private router: Router, private route: ActivatedRoute, private inscricaoService:InscricaoService) {}
}
