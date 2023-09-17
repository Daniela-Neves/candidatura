import { Component, OnInit } from '@angular/core';
import { VagasService } from '../vagas.service';
import { Vagas } from '../vagas';
import { EmpresasService } from '../../empresas/empresas.service';
import { Empresas } from '../../empresas/empresas';

@Component({
  selector: 'app-buscar-vagas',
  templateUrl: './buscar-vagas.component.html',
  styleUrls: ['./buscar-vagas.component.css']
})
export class BuscarVagasComponent implements OnInit {
  vagas: Vagas[] = [];
  empresas : Empresas[] = [];

  constructor(private vagaService: VagasService, private empresaService: EmpresasService) { }

  ngOnInit(): void {
    // Chama o método listar() de empresasService para poder resgatar todas as empresas, atribuindo à variável this.empresas
    this.empresaService.listar().subscribe((empresas) => {
      this.empresas = empresas

      // Para cada empresa eu varro a vagas e então listo elas
      this.empresas.forEach(empresa => {
        // this.vagas = empresa.vagas
        this.vagas.push(...empresa.vagas)

      });

    })
    
    // this.vagaService.listar().subscribe(
    //   (data) => {
    //     this.vagas = data; // Atribui as vagas à variável vagas
    //   },
    //   (error) => {
    //     console.error('Erro ao buscar as vagas', error);
    //   }
    // );
    // this.empresaService.buscarPorId(1).subscribe((empresa) => {
    //   this.vagas = empresa.vagas
    // })

    
  }
}
