import { Component, OnInit } from '@angular/core';
import { VagasService } from '../vagas.service';
import { Vagas } from '../vagas';
import { EmpresasService } from '../../empresas/empresas.service';
import { Empresas } from '../../empresas/empresas';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-buscar-vagas',
  templateUrl: './buscar-vagas.component.html',
  styleUrls: ['./buscar-vagas.component.css']
})
export class BuscarVagasComponent implements OnInit {
  vagas: Vagas[] = [];
  empresas : Empresas[] = [];
  vagasTemp: Vagas[] = [];
  candidatoId=this.route.snapshot.paramMap.get('id')

    // Filtros
    filtros = {
      estado: '',
      cidade: '',
      nomeEmpresa: '',
      tipoVaga: '',
      salario: '',
      modalidade: ''
    };


  constructor(private vagaService: VagasService, private empresaService: EmpresasService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // Chama o método listar() de empresasService para poder resgatar todas as empresas, atribuindo à variável this.empresas
    this.vagaService.listar().subscribe((vagas) => {
      this.vagas = vagas

    })

  }

  // export interface Vaga {
  //   id?: number;
  //   empresaId: number;
  //   nome: string;
  //   tipoVaga: string;
  //   dataPublicacao: string;
  //   cidade: string;
  //   estado: string;
  //   salario: string;
  //   descricao: string;
  //   responsabilidades: string;
  //   qualificacoes: string;
  //   modalidade: string;
  //   statusProcesso?: string;
  // }
  
    busca: string = ''; // Inicialize a busca
  
    // Restante do seu código
  
    aplicarFiltros() {
      this.vagas = this.vagas.filter((vaga) => {
        const filtroEstado = vaga.estado === this.filtros.estado || this.filtros.estado === '';
        const filtroCidade = vaga.cidade === this.filtros.cidade || this.filtros.cidade === '';
        const filtroNomeEmpresa = vaga.nome.includes(this.filtros.nomeEmpresa);
        const filtroTipoVaga = vaga.tipoVaga === this.filtros.tipoVaga || this.filtros.tipoVaga === '';
        const filtroSalario = this.filtros.salario === '' || this.filtrarSalario(vaga.salario);
        const filtroModalidade = vaga.modalidade === this.filtros.modalidade || this.filtros.modalidade === '';
  
        return filtroEstado && filtroCidade && filtroNomeEmpresa && filtroTipoVaga && filtroSalario && filtroModalidade;
      });
    }
  
    private filtrarSalario(salario: string): boolean {
      const faixas = this.filtros.salario.split('-');
      const salarioVaga = parseFloat(salario.replace('R$ ', '').replace(',', '.'));
      if (faixas.length === 2) {
        const salarioMin = parseFloat(faixas[0].trim());
        const salarioMax = parseFloat(faixas[1].trim());
        return salarioVaga >= salarioMin && salarioVaga <= salarioMax;
      } else if (faixas.length === 1) {
        const salarioMin = parseFloat(faixas[0].trim());
        return salarioVaga >= salarioMin;
      } else {
        return true;
      }
    }
  
    atualizarListaBusca(busca: string) {
      this.busca = busca.toLowerCase();
      this.vagas = this.vagas.filter((vaga) =>
        vaga.nome.toLowerCase().includes(this.busca)
      );
    }
  }