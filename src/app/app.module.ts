import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarCandidatoComponent } from './componentes/candidatos/criar-candidato/criar-candidato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarCandidatoComponent } from './componentes/candidatos/listar-candidato/listar-candidato.component';
import { CandidatoComponent } from './componentes/candidatos/candidato/candidato.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirCandidatoComponent } from './componentes/candidatos/excluir-candidato/excluir-candidato.component';
import { EditarCandidatoComponent } from './componentes/candidatos/editar-candidato/editar-candidato.component';
import { PerfisComponent } from './componentes/perfis/perfis.component';
import { LoginComponent } from './componentes/candidatos/login/login.component';
import { LoginEmpresaComponent } from './componentes/empresas/login-empresa/login-empresa.component';
import { CriarEmpresaComponent } from './componentes/empresas/criar-empresa/criar-empresa.component';
import { PaginaInicialEmpresaComponent } from './componentes/empresas/pagina-inicial-empresa/pagina-inicial-empresa.component';
import { CadastrarOportunidadeComponent } from './componentes/empresas/cadastrar-oportunidade/cadastrar-oportunidade.component';
import { ListarEmpresaComponent } from './componentes/empresas/listar-empresa/listar-empresa.component';
import { ListarVagaComponent } from './componentes/vagas/listar-vaga/listar-vaga.component';
import { VagaComponent } from './componentes/vagas/vaga/vaga.component';
import { ExcluirVagaComponent } from './componentes/vagas/excluir-vaga/excluir-vaga.component';
import { EditarVagaComponent } from './componentes/vagas/editar-vaga/editar-vaga.component';
import { MenuCandidatoComponent } from './componentes/candidatos/menu-candidato/menu-candidato.component';
import { BuscarVagasComponent } from './componentes/vagas/buscar-vagas/buscar-vagas.component';
import { DetalhesVagaComponent } from './componentes/vagas/detalhes-vaga/detalhes-vaga.component';
import { FormularioCandidaturaComponent } from './componentes/candidatos/formulario-candidatura/formulario-candidatura.component';
import { FormularioCurriculoComponent } from './componentes/candidatos/formulario-curriculo/formulario-curriculo.component';
import { MenuEmComponent } from './componentes/everymind/menu-em/menu-em.component';
import { LoginEmComponent } from './componentes/everymind/login-em/login-em.component';
import { CadastroEmComponent } from './componentes/everymind/cadastro-em/cadastro-em.component';
import { DashboardComponent } from './componentes/everymind/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    CriarCandidatoComponent,
    ListarCandidatoComponent,
    CandidatoComponent,
    ExcluirCandidatoComponent,
    EditarCandidatoComponent,
    PerfisComponent,
    LoginComponent,
    LoginEmpresaComponent,
    CriarEmpresaComponent,
    PaginaInicialEmpresaComponent,
    CadastrarOportunidadeComponent,
    ListarEmpresaComponent,
    ListarVagaComponent,
    VagaComponent,
    ExcluirVagaComponent,
    EditarVagaComponent,
    MenuCandidatoComponent,
    BuscarVagasComponent,
    DetalhesVagaComponent,
    FormularioCandidaturaComponent,
    FormularioCurriculoComponent,
    MenuEmComponent,
    LoginEmComponent,
    CadastroEmComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
