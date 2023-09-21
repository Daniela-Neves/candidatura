import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {CriarCandidatoComponent} from './componentes/candidatos/criar-candidato/criar-candidato.component';
import {ListarCandidatoComponent} from './componentes/candidatos/listar-candidato/listar-candidato.component';
import {ExcluirCandidatoComponent} from './componentes/candidatos/excluir-candidato/excluir-candidato.component';
import {EditarCandidatoComponent} from './componentes/candidatos/editar-candidato/editar-candidato.component';
import {LoginComponent} from './componentes/candidatos/login/login.component';
import {PerfisComponent} from './componentes/perfis/perfis.component';
import {LoginEmpresaComponent} from './componentes/empresas/login-empresa/login-empresa.component';
import {CadastrarOportunidadeComponent} from './componentes/empresas/cadastrar-oportunidade/cadastrar-oportunidade.component';
import {PaginaInicialEmpresaComponent} from './componentes/empresas/pagina-inicial-empresa/pagina-inicial-empresa.component';
import {CriarEmpresaComponent} from './componentes/empresas/criar-empresa/criar-empresa.component';
import {ListarVagaComponent} from './componentes/vagas/listar-vaga/listar-vaga.component';
import {ExcluirVagaComponent} from './componentes/vagas/excluir-vaga/excluir-vaga.component';
import {EditarVagaComponent} from './componentes/vagas/editar-vaga/editar-vaga.component';
import {MenuCandidatoComponent} from './componentes/candidatos/menu-candidato/menu-candidato.component';
import {BuscarVagasComponent} from './componentes/vagas/buscar-vagas/buscar-vagas.component';
import {DetalhesVagaComponent} from './componentes/vagas/detalhes-vaga/detalhes-vaga.component';
import {FormularioCandidaturaComponent} from './componentes/candidatos/formulario-candidatura/formulario-candidatura.component';
import {FormularioCurriculoComponent} from './componentes/candidatos/formulario-curriculo/formulario-curriculo.component';
import { MenuEmComponent } from './componentes/everymind/menu-em/menu-em.component';
import { LoginEmComponent } from './componentes/everymind/login-em/login-em.component';
import { CadastroEmComponent } from './componentes/everymind/cadastro-em/cadastro-em.component';
import { CadastroEmCadComponent } from './componentes/everymind/cadastro-em-cad/cadastro-em-cad.component';
import { CadastroEmAltComponent } from './componentes/everymind/cadastro-em-alt/cadastro-em-alt.component';
import { CadastroEmExcludeComponent } from './componentes/everymind/cadastro-em-exclude/cadastro-em-exclude.component';
import { CadastroEmExcludeMsgComponent } from './componentes/everymind/cadastro-em-exclude-msg/cadastro-em-exclude-msg.component';
import { CadastroEmXmlComponent } from './componentes/everymind/cadastro-em-xml/cadastro-em-xml.component';
import { CadastroEmAcmMetricasComponent } from './componentes/everymind/cadastro-em-acm-metricas/cadastro-em-acm-metricas.component';
import { CadastroEmAcmMetricasTodaComponent } from './componentes/everymind/cadastro-em-acm-metricas-toda/cadastro-em-acm-metricas-toda.component';
import { CadastroEmAcmMetricasEspecComponent } from './componentes/everymind/cadastro-em-acm-metricas-espec/cadastro-em-acm-metricas-espec.component';
import { PaginaInicialCandidatoComponent } from './componentes/candidatos/pagina-inicial-candidato/pagina-inicial-candidato.component';
import { VagasCadastradaComponent } from './componentes/candidatos/vagas-cadastrada/vagas-cadastrada.component';
import { AcompanhamentoVagaComponent } from './componentes/candidatos/acompanhamento-vaga/acompanhamento-vaga.component';
import { AnalisarPerfilComponent } from './componentes/candidatos/analisar-perfil/analisar-perfil.component';
import { PerfilCandidatoComponent } from './componentes/candidatos/perfil-candidato/perfil-candidato.component';
import { AnaliseTesteComponent } from './componentes/candidatos/analise-teste/analise-teste.component';
import { CentralFeedbackComponent } from './componentes/candidatos/central-feedback/central-feedback.component';
import { CandidatoReprovadoComponent } from './componentes/candidatos/candidato-reprovado/candidato-reprovado.component';
import { AgendamentoRhComponent } from './componentes/candidatos/agendamento-rh/agendamento-rh.component';
import { AgendamentoGestorComponent } from './componentes/candidatos/agendamento-gestor/agendamento-gestor.component';
import { ReprovadoRhComponent } from './componentes/candidatos/reprovado-rh/reprovado-rh.component';
import { AprovadoVagaComponent } from './componentes/candidatos/aprovado-vaga/aprovado-vaga.component';
import { ReprovadoGestorComponent } from './componentes/candidatos/reprovado-gestor/reprovado-gestor.component';
import { FinalizarVagaComponent } from './componentes/candidatos/finalizar-vaga/finalizar-vaga.component';
import { ProcessoFinalizadoComponent } from './componentes/candidatos/processo-finalizado/processo-finalizado.component';
import { ProcessoPausadoComponent } from './componentes/candidatos/processo-pausado/processo-pausado.component';
import { ProcessoPausadoFinalizadoComponent } from './componentes/candidatos/processo-pausado-finalizado/processo-pausado-finalizado.component';
import { ProcessoExcluidoComponent } from './componentes/candidatos/processo-excluido/processo-excluido.component';
import { ProcessoExcluidoFinalizadoComponent } from './componentes/candidatos/processo-excluido-finalizado/processo-excluido-finalizado.component';


const routes: Routes = [
    {
        path: '',
        component: PerfisComponent
        // component: PaginaInicialEmpresaComponent
        // component: ListarCandidatoComponent,
    },
    {
        path: 'perfis',
        component: PerfisComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'criarCandidato',
        component: CriarCandidatoComponent
    }, {
        path: 'listarCandidato',
        component: ListarCandidatoComponent
    }, {
        path: 'candidatos/excluirCandidato/:id',
        component: ExcluirCandidatoComponent
    }, {
        path: 'candidatos/editarCandidato/:id',
        component: EditarCandidatoComponent
    }, {
        path: 'candidato',
        component: LoginComponent
    }, {
        path: 'criarEmpresa',
        component: CriarEmpresaComponent
    }, {
        path: 'loginEmpresa',
        component: LoginEmpresaComponent
    }, {
        path: 'paginaInicialEmpresa',
        component: PaginaInicialEmpresaComponent
    },
    // {
    //     path: 'acompanhamento-vagas',
    //     component: AcompanhamentoVagasComponent
    // },
    // {
    //     path: 'acompanhamento-candidatos',
    //     component: AcompanhamentoCandidatosComponent
    // },
    {
        path: 'cadastrar-oportunidades',
        component: CadastrarOportunidadeComponent
    },
    // {
    //     path: 'alterar-dados',
    //     component: AlterarDadosComponent
    // }
    {
        path: 'listarVagas',
        component: ListarVagaComponent
    }, {
        path: 'vagas/excluirVaga/:id',
        component: ExcluirVagaComponent
    }, {
        path: 'vagas/editarVaga/:id',
        component: EditarVagaComponent
    }, {
        path: 'menu-candidato/:id',
        component: MenuCandidatoComponent
    }, {
        path: 'buscar-vagas',
        component: BuscarVagasComponent
    }, {
        path: 'vagas/detalhes/:id',
        component: DetalhesVagaComponent
    }, {
        path: 'formulario-candidatura/:id',
        component: FormularioCandidaturaComponent
    }, {
        path: 'formulario-curriculo/:id',
        component: FormularioCurriculoComponent
    }, {
        path: 'detalhes-vaga',
        component: DetalhesVagaComponent
    }, {
        path: 'login-em',
        component: LoginEmComponent
    }, {
        path: 'menu-em',
        component: MenuEmComponent
    }, {
        path: 'cadastro-em',
        component: CadastroEmComponent
    }, {
        path: 'cadastro-em-cad',
        component: CadastroEmCadComponent
    }, {
        path: 'cadastro-em-alt',
        component: CadastroEmAltComponent
    }, {
        path: 'cadastro-em-exclude',
        component: CadastroEmExcludeComponent
    }, {
        path: 'cadastro-em-exclude-msg',
        component: CadastroEmExcludeMsgComponent
    }, {
        path: 'cadastro-em-xml',
        component: CadastroEmXmlComponent
    }, {
        path: 'cadastro-em-acm-metricas',
        component: CadastroEmAcmMetricasComponent
    }, {
        path: 'cadastro-em-acm-metricas-toda',
        component: CadastroEmAcmMetricasTodaComponent
    }, {
        path: 'cadastro-em-acm-metricas-espec',
        component: CadastroEmAcmMetricasEspecComponent
    }, {
        path: 'pagina-inicial-candidato',
        component: PaginaInicialCandidatoComponent
    }, {
        path: 'vagas-cadastrada',
        component: VagasCadastradaComponent
    }, {
        path: 'acompanhamento-vaga',
        component: AcompanhamentoVagaComponent
    }, {
        path: 'analisar-perfil',
        component: AnalisarPerfilComponent
    }, {
        path: 'perfil-candidato',
        component: PerfilCandidatoComponent
    }, {
        path: 'analise-teste',
        component: AnaliseTesteComponent
    }, {
        path: 'central-feedback',
        component: CentralFeedbackComponent
    }, {
        path: 'candidato-reprovado',
        component: CandidatoReprovadoComponent
    }, {
        path: 'agendamento-rh',
        component: AgendamentoRhComponent
    }, {
        path: 'agendamento-rh',
        component: AgendamentoRhComponent
    }, {
        path: 'agendamento-gestor',
        component: AgendamentoGestorComponent
    }, {
        path: 'reprovado-rh',
        component: ReprovadoRhComponent
    }, {
        path: 'aprovado-vaga',
        component: AprovadoVagaComponent
    }, {
        path: 'reprovado-gestor',
        component: ReprovadoGestorComponent
    }, {
        path: 'finalizar-vaga',
        component: FinalizarVagaComponent
    }, {
        path: 'processo-finalizado',
        component: ProcessoFinalizadoComponent
    }, {
        path: 'processo-pausado',
        component: ProcessoPausadoComponent
    }, {
        path: 'processo-pausado-finalizado',
        component: ProcessoPausadoFinalizadoComponent
    }, {
        path: 'processo-excluido',
        component: ProcessoExcluidoComponent
    }, {
        path: 'processo-excluido-finalizado',
        component: ProcessoExcluidoFinalizadoComponent
    }
    
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
