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


    // Filtros
    filtros = {
      estado: '',
      cidade: '',
      nomeEmpresa: '',
      tipoVaga: '',
      remuneracao: '',
      modalidade: ''
    };


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

  aplicarFiltros() {
    let vagasFiltradas: Vagas[] = [];

    for (const empresa of this.empresas) {
      vagasFiltradas = vagasFiltradas.concat(empresa.vagas);
    }

    vagasFiltradas = vagasFiltradas.filter(vaga => {
      return (
        (!this.filtros.estado || vaga.estado === this.filtros.estado) &&
        (!this.filtros.cidade || vaga.cidade === this.filtros.cidade) &&
        (!this.filtros.nomeEmpresa || vaga.nome === this.filtros.nomeEmpresa) &&
        (!this.filtros.tipoVaga || vaga.tipoContratacao === this.filtros.tipoVaga) &&
      this.filtroRemuneracao(vaga.salario) &&
      (!this.filtros.modalidade || vaga.modalidade === this.filtros.modalidade)
//ALTERAR AQUI PARA NOME FANTASIA QUANDO EXISTIR NO PROJETO

      );
    });

    this.vagas = vagasFiltradas;
  }


  filtroRemuneracao(remuneracao: string): boolean {
    if (!this.filtros.remuneracao) return true;

    const faixas = this.filtros.remuneracao.split('-');
    const valorMinimo = parseFloat(faixas[0]);
    const valorMaximo = parseFloat(faixas[1]);

    if (isNaN(valorMinimo) && isNaN(valorMaximo)) return true;

    const salario = parseFloat(remuneracao.replace('R$', '').replace('.', '').replace(',', '.'));

    if (isNaN(salario)) return false;

    if (!isNaN(valorMinimo) && salario < valorMinimo) return false;
    if (!isNaN(valorMaximo) && salario > valorMaximo) return false;

    return true;
  }



}
