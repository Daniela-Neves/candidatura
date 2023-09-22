import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Certificacao } from './certificacao';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CertificacaoService {

  private readonly API = 'http://localhost:3000/certificacaos'

//   private apiUrl = 'http://localhost:4000/api/salvar-dados'; // Substitua pela URL correta
//  teste mongo

  constructor(private http: HttpClient) { }

  listar(): Observable<Certificacao[]> {
    return this.http.get<Certificacao[]>(this.API)
  }

  criar(certificacao: Certificacao):Observable<Certificacao>{
    return this.http.post<Certificacao>(this.API, certificacao)
  }

  excluir(candidatoid:number):Observable<Certificacao>{
    const url = `${this.API}/${candidatoid}`
    return this.http.delete<Certificacao>(url)
  }

  buscarPorId(candidatoid: number): Observable<Certificacao>{
    const url = `${this.API}/${candidatoid}`
    return this.http.get<Certificacao>(url)
  }

  editar(certificacao: Certificacao): Observable<Certificacao>{
    const url = `${this.API}/${certificacao.candidatoId}`
    return this.http.put<Certificacao>(url, certificacao)
  }

  // cadastrarCertificacao(certificacao: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, certificacao);
  // }

  getCertificacao(): Observable<Certificacao[]> {
    return this.http.get<any>(this.API);
  }

}
