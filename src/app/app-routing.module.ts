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
import { FormularioCandidaturaComponent } from './componentes/candidatos/formulario-candidatura/formulario-candidatura.component';
import {FormularioCurriculoComponent} from './componentes/candidatos/formulario-curriculo/formulario-curriculo.component';
import { MenuEmComponent } from './componentes/everymind/menu-em/menu-em.component';
import { LoginEmComponent } from './componentes/everymind/login-em/login-em.component';
import { CadastroEmComponent } from './componentes/everymind/cadastro-em/cadastro-em.component';
import { DashboardComponent } from './componentes/everymind/dashboard/dashboard.component';
import { AcompanharVagasComponent } from './componentes/candidatos/acompanhar-vagas/acompanhar-vagas.component';
import { EditarEmpresaComponent } from './componentes/empresas/editar-empresa/editar-empresa.component';
import { AdministrarVagaComponent } from './componentes/vagas/administrar-vaga/administrar-vaga.component';
import { EditarEmComponent } from './componentes/everymind/editar-em/editar-em.component';
import { DashboardEmpresaComponent } from './componentes/empresas/dashboard/dashboard-empresa.component';

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
        path: 'paginaInicialEmpresa/:id',
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
        path: 'cadastrar-oportunidades/:id',
        component: CadastrarOportunidadeComponent
    },
    // {
    //     path: 'alterar-dados',
    //     component: AlterarDadosComponent
    // }
    {
        path: 'listarVagas/:id',
        component: ListarVagaComponent
    }, {
        path: 'vagas/excluirVaga/:id/:idEmpresa',
        component: ExcluirVagaComponent
    }, {
        path: 'vagas/editarVaga/:id/:idEmpresa',
        component: EditarVagaComponent
    }, {
        path: 'menu-candidato/:id',
        component: MenuCandidatoComponent
    }, {
        path: 'buscar-vagas/:id',
        component: BuscarVagasComponent
    }, {
        path: 'vagas/detalhes/:id/:candidatoId',
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
    }, 
    // {
    //     path: 'menu-em',
    //     component: MenuEmComponent
    // },
    {
      path:'cadastroEveryMind',
      component:CadastroEmComponent
    }, {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'acompanhar-vagas/:id',
        component: AcompanharVagasComponent
    },
    {
        path: 'empresas/editarEmpresa/:id',
        component: EditarEmpresaComponent
    },
    {
        path: 'menu-em/:id',
        component: MenuEmComponent
    },
    {
        path: 'everymind/editarEverymind/:id',
        component: EditarEmComponent
    },
    {
        path: 'empresas/editarEmpresa/:id',
        component: EditarEmpresaComponent
    },
    {
        path: 'everymind/cadastrar/:id',
        component: CadastroEmComponent
    },
    {
        path: 'administrar-vaga/:id/:idEmpresa',
        component: AdministrarVagaComponent
    }, {
        path: 'dashboard-empresas/:id',
        component: DashboardEmpresaComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
