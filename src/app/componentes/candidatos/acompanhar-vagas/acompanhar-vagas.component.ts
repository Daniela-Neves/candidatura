import { Component, OnInit } from '@angular/core';
import { VagasService } from '../../vagas/vagas.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Vagas } from '../../vagas/vagas';
import { InscricaoService } from '../../vagas/inscricao.service';
import { VagasInscricao } from '../vagasInscricao';

@Component({
  selector: 'app-acompanhar-vagas',
  templateUrl: './acompanhar-vagas.component.html',
  styleUrls: ['./acompanhar-vagas.component.css']
})
export class AcompanharVagasComponent implements OnInit {

  constructor(private vagaService: VagasService, private inscricaoService:InscricaoService, private router:Router, private route:ActivatedRoute) { }

  vagas: VagasInscricao[] = [];

  ngOnInit(): void {
    this.inscricaoService.buscarPorCandidato(Number(this.route.snapshot.paramMap.get('id'))).subscribe((vagas) => {
      // this.vagaService.listar().subscribe((vagas) => {
      this.vagas = vagas
    })
  }
}
