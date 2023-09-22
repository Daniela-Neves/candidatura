import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormacaoAcademica } from './formacaoAcademica';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormacaoAcademicaService {

  private readonly API = 'http://localhost:3000/formacaoacademicas'

//   private apiUrl = 'http://localhost:4000/api/salvar-dados'; // Substitua pela URL correta
//  teste mongo

  constructor(private http: HttpClient) { }

  listar(): Observable<FormacaoAcademica[]> {
    return this.http.get<FormacaoAcademica[]>(this.API)
  }

  criar(formacaoacademica: FormacaoAcademica):Observable<FormacaoAcademica>{
    return this.http.post<FormacaoAcademica>(this.API, formacaoacademica)
  }

  excluir(candidatoid:number):Observable<FormacaoAcademica>{
    const url = `${this.API}/${candidatoid}`
    return this.http.delete<FormacaoAcademica>(url)
  }

  buscarPorId(candidatoid: number): Observable<FormacaoAcademica>{
    const url = `${this.API}/${candidatoid}`
    return this.http.get<FormacaoAcademica>(url)
  }

  editar(formacaoacademica: FormacaoAcademica): Observable<FormacaoAcademica>{
    const url = `${this.API}/${formacaoacademica.candidatoId}`
    return this.http.put<FormacaoAcademica>(url, formacaoacademica)
  }

  // cadastrarFormacaoAcademica(formacaoacademica: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, formacaoacademica);
  // }

  getFormacaoAcademica(): Observable<FormacaoAcademica[]> {
    return this.http.get<any>(this.API);
  }

}
