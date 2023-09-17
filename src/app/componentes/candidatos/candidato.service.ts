import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Candidato } from './candidato';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  private readonly API = 'http://localhost:3000/candidatos'

//   private apiUrl = 'http://localhost:4000/api/salvar-dados'; // Substitua pela URL correta
//  teste mongo

  constructor(private http: HttpClient) { }

  listar(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(this.API)
  }

  criar(candidato: Candidato):Observable<Candidato>{
    return this.http.post<Candidato>(this.API, candidato)
  }

  excluir(id:number):Observable<Candidato>{
    const url = `${this.API}/${id}`
    return this.http.delete<Candidato>(url)
  }

  buscarPorId(id: number): Observable<Candidato>{
    const url = `${this.API}/${id}`
    return this.http.get<Candidato>(url)
  }

  editar(candidato: Candidato): Observable<Candidato>{
    const url = `${this.API}/${candidato.id}`
    return this.http.put<Candidato>(url, candidato)
  }

  // cadastrarCandidato(candidato: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, candidato);
  // }
}
