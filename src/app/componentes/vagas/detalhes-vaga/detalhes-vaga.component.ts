import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VagasService } from '../vagas.service';


@Component({
  selector: 'app-detalhes-vaga',
  templateUrl: './detalhes-vaga.component.html',
  styleUrls: ['./detalhes-vaga.component.css']
})
export class DetalhesVagaComponent implements OnInit {
  vaga: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,

    private vagaService: VagasService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      if (idParam !== null) {
        const vagaId = +idParam;
        if (!isNaN(vagaId)) {
          // Continuar com a lógica para buscar a vaga
        } else {
          console.error('ID da vaga não é um número válido.');
          this.router.navigate(['/vagas']);
        }
      } else {
        console.error('ID da vaga não está presente nos parâmetros da rota.');
        this.router.navigate(['/vagas']);
      }
    });

  }
}
