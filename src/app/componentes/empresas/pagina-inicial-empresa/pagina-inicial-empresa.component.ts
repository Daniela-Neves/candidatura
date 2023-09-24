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

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('este é o id',id);

        this.service.buscarPorId(Number(id)).subscribe((empresa) => {
            this.empresa = empresa;
        });
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


  listarVagas(){
    this.router.navigate(['/listarVagas/',this.route.snapshot.paramMap.get('id')])
  }

  listarCandidatos() {
    this.router.navigate(['/listarCandidato'])
  }

//   editarEmpresa() {
//     this.service.editar(this.empresa).subscribe(() => {
//         this.router.navigate(['/listarCandidato'])
//     })
// }

cadastrarVaga(){
  const id = this.route.snapshot.paramMap.get('id');
  this.router.navigate(['/cadastrar-oportunidades/',id])
}

editarDadosCadastrais(){
  this.router.navigate(['/editarEmpresa/',this.route.snapshot.paramMap.get('id')])
}

}
