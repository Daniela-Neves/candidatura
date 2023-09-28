import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Proficiencia } from './proficiencia';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProficienciaService {

  private readonly API = 'http://localhost:3000/proficiencias'

//   private apiUrl = 'http://localhost:4000/api/salvar-dados'; // Substitua pela URL correta
//  teste mongo

  constructor(private http: HttpClient) { }

  listar(): Observable<Proficiencia[]> {
    return this.http.get<Proficiencia[]>(this.API)
  }

  criar(proficiencia: Proficiencia):Observable<Proficiencia>{
    return this.http.post<Proficiencia>(this.API, proficiencia)
  }

  excluir(candidatoid:number):Observable<Proficiencia>{
    const url = `${this.API}/${candidatoid}`
    return this.http.delete<Proficiencia>(url)
  }

  buscarPorId(candidatoid: number): Observable<Proficiencia>{
    const url = `${this.API}/${candidatoid}`
    return this.http.get<Proficiencia>(url)
  }

  editar(proficiencia: Proficiencia): Observable<Proficiencia>{
    const url = `${this.API}/${proficiencia.candidatoId}`
    return this.http.put<Proficiencia>(url, proficiencia)
  }

  // cadastrarProficiencia(proficiencia: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, proficiencia);
  // }

  getProficiencia(): Observable<Proficiencia[]> {
    return this.http.get<any>(this.API);
  }

}
