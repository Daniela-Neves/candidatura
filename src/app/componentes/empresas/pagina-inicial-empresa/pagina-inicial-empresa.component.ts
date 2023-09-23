import { Component, OnInit } from '@angular/core';
import { VagasService } from '../../vagas/vagas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresasService } from '../empresas.service';
import { Empresas } from '../empresas';

@Component({
  selector: 'app-pagina-inicial-empresa',
  templateUrl: './pagina-inicial-empresa.component.html',
  styleUrls: ['./pagina-inicial-empresa.component.css']
})
export class PaginaInicialEmpresaComponent implements OnInit {

  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private service : EmpresasService
    ){

  }

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

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
        this.service.buscarPorId(parseInt(id)).subscribe((empresa) => {
            this.empresa = empresa;
        });
    }
}

  listarVagas(){
    this.router.navigate(['/listarVagas'])
  }

  listarCandidatos() {
    this.router.navigate(['/listarCandidato'])
  }

//   editarEmpresa() {
//     this.service.editar(this.empresa).subscribe(() => {
//         this.router.navigate(['/listarCandidato'])
//     })
// }

}
