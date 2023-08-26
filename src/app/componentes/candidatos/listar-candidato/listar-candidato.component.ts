import { Component, OnInit } from '@angular/core';
import { Candidato } from '../candidato';
import { CandidatoService } from '../candidato.service';

@Component({
  selector: 'app-listar-candidato',
  templateUrl: './listar-candidato.component.html',
  styleUrls: ['./listar-candidato.component.css']
})
export class ListarCandidatoComponent implements OnInit{

  listaCandidatos:Candidato[] = []

  constructor(private service: CandidatoService){

  }

  ngOnInit(): void {
    this.service.listar().subscribe((listaCandidatos) => {
      this.listaCandidatos = listaCandidatos
    })
  }

}
