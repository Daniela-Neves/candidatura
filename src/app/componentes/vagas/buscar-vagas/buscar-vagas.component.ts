import { Component, OnInit } from '@angular/core';
import { VagasService } from '../vagas.service';
import { Vagas } from '../vagas';

@Component({
  selector: 'app-buscar-vagas',
  templateUrl: './buscar-vagas.component.html',
  styleUrls: ['./buscar-vagas.component.css']
})
export class BuscarVagasComponent implements OnInit {
  vagas: Vagas[] = [];

  constructor(private vagaService: VagasService) { }

  ngOnInit(): void {
    // Chama o método listar() para buscar as vagas do serviço
    this.vagaService.listar().subscribe(
      (data) => {
        this.vagas = data; // Atribui as vagas à variável vagas
      },
      (error) => {
        console.error('Erro ao buscar as vagas', error);
      }
    );
  }
}
