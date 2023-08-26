import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { CriarCandidatoComponent } from './componentes/candidatos/criar-candidato/criar-candidato.component';
import { ListarCandidatoComponent } from './componentes/candidatos/listar-candidato/listar-candidato.component';
import { ExcluirCandidatoComponent } from './componentes/candidatos/excluir-candidato/excluir-candidato.component';
import { EditarCandidatoComponent } from './componentes/candidatos/editar-candidato/editar-candidato.component';

const routes: Routes = [
  {
    path:'',
    component: ListarCandidatoComponent,
    pathMatch: 'full'
  },
  {
    path:'criarCandidato',
    component:CriarCandidatoComponent
  },
  {
    path:'listarCandidato',
    component:ListarCandidatoComponent
  },
  {
    path: 'candidatos/excluirCandidato/:id',
    component: ExcluirCandidatoComponent
  },
  {
    path: 'candidatos/editarCandidato/:id',
    component: EditarCandidatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
