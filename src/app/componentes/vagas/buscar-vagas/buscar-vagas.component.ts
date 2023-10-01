import { Component, OnInit } from '@angular/core';
import { VagasService } from '../vagas.service';
import { Vagas } from '../vagas';
import { EmpresasService } from '../../empresas/empresas.service';
import { Empresas } from '../../empresas/empresas';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscar-vagas',
  templateUrl: './buscar-vagas.component.html',
  styleUrls: ['./buscar-vagas.component.css']
})
export class BuscarVagasComponent implements OnInit {
  vagas: Vagas[] = [];
  empresas: Empresas[] = [];
  vagasTemp: Vagas[] = [];
  candidatoId: string = '';
  vagasOriginal: Vagas[] = [];

  // Filtros
  filtros = {
    estado: '',
    cidade: '',
    nomeEmpresa: '',
    tipoVaga: '',
    salario: '',
    modalidade: ''
  };

  busca: string = '';

  constructor(
    private vagaService: VagasService,
    private empresaService: EmpresasService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.candidatoId = this.route.snapshot.paramMap.get('id') || '';

    this.vagaService.listar().subscribe((vagas) => {
      this.vagas = vagas;
      this.vagasTemp = [...vagas];
      this.vagasOriginal = [...vagas];
    });
  }

  aplicarFiltros() {
    this.vagas = this.vagasTemp.filter((vaga) => {
      const filtroEstado = this.filtros.estado === '' || vaga.estado.toLowerCase().includes(this.filtros.estado.toLowerCase());
      const filtroCidade = this.filtros.cidade === '' || vaga.cidade.toLowerCase().includes(this.filtros.cidade.toLowerCase());
      // const filtroNomeEmpresa = this.filtros.nomeEmpresa === '' || vaga.nome.toLowerCase().includes(this.filtros.nomeEmpresa.toLowerCase());
      const filtroTipoVaga = this.filtros.tipoVaga === '' || vaga.tipoVaga.toLowerCase().includes(this.filtros.tipoVaga.toLowerCase());
      // const filtroSalario = this.filtros.salario === '' || this.filtrarSalario(vaga.salario);
      const filtroModalidade = this.filtros.modalidade === '' || vaga.modalidade.toLowerCase().includes(this.filtros.modalidade.toLowerCase());

      return filtroEstado && filtroCidade && filtroTipoVaga && filtroModalidade;
    });
  }

  // private filtrarSalario(salario: string): boolean {
  //   if (this.filtros.salario === '') {
  //     return true;
  //   }

  //   const faixas = this.filtros.salario.split('-');
  //   const salarioVaga = parseFloat(salario.replace('R$ ', '').replace(',', '.'));
  //   if (faixas.length === 2) {
  //     const salarioMin = parseFloat(faixas[0].trim());
  //     const salarioMax = parseFloat(faixas[1].trim());
  //     return salarioVaga >= salarioMin && salarioVaga <= salarioMax;
  //   } else if (faixas.length === 1) {
  //     const salarioMin = parseFloat(faixas[0].trim());
  //     return salarioVaga >= salarioMin;
  //   } else {
  //     return true;
  //   }
  // }

  atualizarListaBusca() {
    this.vagas = this.vagasOriginal.filter((vaga) =>
      vaga.nome.toLowerCase().includes(this.busca.toLowerCase())
    );
  }
}
