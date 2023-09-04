import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {CriarCandidatoComponent} from './componentes/candidatos/criar-candidato/criar-candidato.component';
import {ListarCandidatoComponent} from './componentes/candidatos/listar-candidato/listar-candidato.component';
import {ExcluirCandidatoComponent} from './componentes/candidatos/excluir-candidato/excluir-candidato.component';
import {EditarCandidatoComponent} from './componentes/candidatos/editar-candidato/editar-candidato.component';
import {LoginComponent} from './componentes/candidatos/login/login.component';
import {PerfisComponent} from './componentes/perfis/perfis.component';
import {LoginEmpresaComponent} from './componentes/empresas/login-empresa/login-empresa.component';
import { CadastrarOportunidadeComponent } from './componentes/empresas/cadastrar-oportunidade/cadastrar-oportunidade.component';
import { PaginaInicialEmpresaComponent } from './componentes/empresas/pagina-inicial-empresa/pagina-inicial-empresa.component';
import { CriarEmpresaComponent } from './componentes/empresas/criar-empresa/criar-empresa.component';
import { ListarVagaComponent } from './componentes/vagas/listar-vaga/listar-vaga.component';

const routes: Routes = [
    {
        path: '',
        component: PerfisComponent
        //component: ExcluirCandidatoComponent
        // component: ListarCandidatoComponent,
    },
    {
        path: 'perfis',
        component: PerfisComponent
    },
    {
        path: 'criarCandidato',
        component: CriarCandidatoComponent
    },
    {
        path: 'listarCandidato',
        component: ListarCandidatoComponent
    },
    {
        path: 'candidatos/excluirCandidato/:id',
        component: ExcluirCandidatoComponent
    },
    {
        path: 'candidatos/editarCandidato/:id',
        component: EditarCandidatoComponent
    },
    {
        path: 'candidato',
        component: LoginComponent
    },
    {
        path: 'criarEmpresa',
        component: CriarEmpresaComponent
    },
    {
        path: 'loginEmpresa',
        component: LoginEmpresaComponent
    },
    {
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
      path:'listarVagas',
      component: ListarVagaComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
