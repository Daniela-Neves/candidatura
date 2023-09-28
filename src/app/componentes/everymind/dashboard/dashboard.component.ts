import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CandidatoService } from '../../candidatos/candidato.service';
import { Candidato } from '../../candidatos/candidato';
import { EmpresasService } from '../../empresas/empresas.service';
import { Empresas } from '../../empresas/empresas';
import { VagasService } from '../../vagas/vagas.service';
import { Vagas } from '../../vagas/vagas';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  listaCandidatos:Candidato[]=[]
  listaEmpresas:Empresas[]=[]
  listaVagas:Vagas[]=[]

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
    
  }

  // cancelar(){
  //   const id = this.route.snapshot.paramMap.get('id')
  //   this.router.navigate(['/menu-em',this.route.snapshot.paramMap.get('id')])
  // }


  constructor(private breakpointObserver: BreakpointObserver, private candidatoService : CandidatoService, 
    private empresaService:EmpresasService, private vagasService:VagasService, private router: Router, private route: ActivatedRoute) {}
}
