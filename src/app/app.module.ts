import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarCandidatoComponent } from './componentes/candidatos/criar-candidato/criar-candidato.component';
import { FormsModule } from '@angular/forms';
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
import { CadastroEmCadComponent } from './componentes/everymind/cadastro-em-cad/cadastro-em-cad.component';
import { CadastroEmAltComponent } from './componentes/everymind/cadastro-em-alt/cadastro-em-alt.component';
import { CadastroEmExcludeComponent } from './componentes/everymind/cadastro-em-exclude/cadastro-em-exclude.component';
import { CadastroEmExcludeMsgComponent } from './componentes/everymind/cadastro-em-exclude-msg/cadastro-em-exclude-msg.component';
import { CadastroEmXmlComponent } from './componentes/everymind/cadastro-em-xml/cadastro-em-xml.component';
import { CadastroEmAcmMetricasComponent } from './componentes/everymind/cadastro-em-acm-metricas/cadastro-em-acm-metricas.component';
import { CadastroEmAcmMetricasTodaComponent } from './componentes/everymind/cadastro-em-acm-metricas-toda/cadastro-em-acm-metricas-toda.component';
import { CadastroEmAcmMetricasEspecComponent } from './componentes/everymind/cadastro-em-acm-metricas-espec/cadastro-em-acm-metricas-espec.component';


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
    CadastroEmCadComponent,
    CadastroEmAltComponent,
    CadastroEmExcludeComponent,
    CadastroEmExcludeMsgComponent,
    CadastroEmXmlComponent,
    CadastroEmAcmMetricasComponent,
    CadastroEmAcmMetricasTodaComponent,
    CadastroEmAcmMetricasEspecComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
