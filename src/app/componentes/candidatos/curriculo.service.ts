import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Curriculo } from './curriculo';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Proficiencia } from './proficiencia';
import { Certificacao } from './certificacao';
import { ExperienciaProfissional } from './experienciaProfissional';
import { FormacaoAcademica } from './formacaoAcademica';


@Injectable({
  providedIn: 'root'
})
export class CurriculoService {

  private readonly API = 'http://localhost:5277/Curriculo'
  // private readonly API_DadosPessoais = 'http://localhost:5277/DadosPessoais'
  private readonly API_Idiomas = 'http://localhost:5277/Proficiencia'
  private readonly API_ExperienciaProfssional = 'http://localhost:5277/ExperienciaProfissional'
  private readonly API_FormacaoAcademica = 'http://localhost:5277/FormacaoAcademica'
  private readonly API_Certificacao = 'http://localhost:5277/Certificacao'



  constructor(private http: HttpClient) { }

  listar(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.API)
  }

  criar(curriculo: Curriculo): Observable<any> {
    return this.http.post<any>(this.API, curriculo);
}


  excluir(id:number):Observable<Curriculo>{
    const url = `${this.API}/${id}`
    return this.http.delete<Curriculo>(url)
  }

  buscarPorId(id: number): Observable<Curriculo>{
    const url = `${this.API}/${id}`
    return this.http.get<Curriculo>(url)
  }

  editar(curriculo: Curriculo): Observable<Curriculo>{
    const url = `${this.API}/${curriculo.candidatoId}`
    return this.http.put<Curriculo>(url, curriculo)
  }

  // cadastrarCurriculo(curriculo: any): Observable<any> {
  //   return this.http.post<any>(this.aPI, curriculo);
  // }

  getCurriculos(): Observable<Curriculo[]> {
    return this.http.get<any>(this.API);
  }

  salvarDadosPessoais(curriculo: Curriculo): Observable<any> {
    return this.http.post<any>(`${this.API}`, curriculo);
  }

  salvarExperienciasProfissionais(experiencias: ExperienciaProfissional): Observable<any> {
    return this.http.post<any>(`${this.API_ExperienciaProfssional}`, experiencias);
  }

  salvarExperienciaAcademica(experiencias: FormacaoAcademica): Observable<any> {
    return this.http.post<any>(`${this.API_FormacaoAcademica}`, experiencias);
  }

  salvarIdioma(idiomas: Proficiencia[]): Observable<any> {
    return this.http.post<any>(`${this.API_Idiomas}`, idiomas);
  }

  salvarCertificado(certificados: Certificacao[]): Observable<any> {
    return this.http.post<any>(`${this.API_Certificacao}`, certificados);
  }
}
