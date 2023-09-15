import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-candidatura',
  templateUrl: './formulario-candidatura.component.html',
  styleUrls: ['./formulario-candidatura.component.css'],
})
export class FormularioCandidaturaComponent {
  dadosPessoais: any = {};
  certificados: any[] = [];


  // idiomas: any[] = [{ idioma: '', nivel: '' }];

  saveDadosPessoais() {
    console.log('Dados pessoais salvos:', this.dadosPessoais);
  }

  saveExperienciaAcademica() {
    console.log('Experiência acadêmica salva.');
  }

  saveIdiomas() {
    console.log('Idiomas salvos.');
  }

  saveCertificados() {
    console.log('Certificados salvos.');
  }

  finalizarCandidatura() {
    console.log('Candidatura finalizada.');
  }

  // adicionarIdioma() {
  //   this.idiomas.push({});
  // }

  adicionarCertificado() {
    this.certificados.push({});
  }

}
