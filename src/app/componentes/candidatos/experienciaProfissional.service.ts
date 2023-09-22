import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ExperienciaProfissional } from './experienciaProfissional';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaProfissionalService {

  private readonly API = 'http://localhost:3000/experienciaprofissionals'

//   private apiUrl = 'http://localhost:4000/api/salvar-dados'; // Substitua pela URL correta
//  teste mongo

  constructor(private http: HttpClient) { }

  listar(): Observable<ExperienciaProfissional[]> {
    return this.http.get<ExperienciaProfissional[]>(this.API)
  }

  criar(experienciaprofissional: ExperienciaProfissional):Observable<ExperienciaProfissional>{
    return this.http.post<ExperienciaProfissional>(this.API, experienciaprofissional)
  }

  excluir(candidatoid:number):Observable<ExperienciaProfissional>{
    const url = `${this.API}/${candidatoid}`
    return this.http.delete<ExperienciaProfissional>(url)
  }

  buscarPorId(candidatoid: number): Observable<ExperienciaProfissional>{
    const url = `${this.API}/${candidatoid}`
    return this.http.get<ExperienciaProfissional>(url)
  }

  editar(experienciaprofissional: ExperienciaProfissional): Observable<ExperienciaProfissional>{
    const url = `${this.API}/${experienciaprofissional.candidatoId}`
    return this.http.put<ExperienciaProfissional>(url, experienciaprofissional)
  }

  // cadastrarExperienciaProfissional(experienciaprofissional: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, experienciaprofissional);
  // }

  getExperienciaProfissional(): Observable<ExperienciaProfissional[]> {
    return this.http.get<any>(this.API);
  }

}
