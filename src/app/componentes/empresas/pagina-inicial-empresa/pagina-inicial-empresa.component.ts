import { Component } from '@angular/core';
import { VagasService } from '../../vagas/vagas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-inicial-empresa',
  templateUrl: './pagina-inicial-empresa.component.html',
  styleUrls: ['./pagina-inicial-empresa.component.css']
})
export class PaginaInicialEmpresaComponent {

  constructor(
    private router: Router,
    ){

  }

  listarVagas(){
    this.router.navigate(['/listarVagas'])
  }

}
