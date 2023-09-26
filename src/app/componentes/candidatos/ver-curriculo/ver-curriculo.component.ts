import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurriculoService } from '../curriculo.service';
import { Curriculo } from '../curriculo';

@Component({
  selector: 'app-ver-curriculo',
  templateUrl: './ver-curriculo.component.html',
  styleUrls: ['./ver-curriculo.component.css']
})
export class VerCurriculoComponent implements OnInit{

  curriculo:Curriculo={
    candidatoId: 0,
    dataNascimento: '',
    genero: '',
    raca: '',
    deficiencias: {
      fisica: false,
      auditiva: false,
      visual: false,
      intelectual: false,
      autista: false
    },
    endereco: {
      cep: '',
      rua: '',
      numero: '',
      cidade: '',
      estado: ''
    },
    linkedin: ''
  }

  constructor(private service : CurriculoService, private router : Router, private route : ActivatedRoute) {}

  ngOnInit(): void {
    
    this.service.buscarPorId(Number(this.route.snapshot.paramMap.get('idCandidato'))).subscribe((curriculo)=>{
      console.log('este é a data',curriculo.dataNascimento);
      
      this.curriculo=curriculo
    })

  }
}
