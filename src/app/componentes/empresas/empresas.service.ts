import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Empresas } from './empresas';
import { Observable } from 'rxjs';
import { Vagas } from '../vagas/vagas';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  private readonly API = 'http://localhost:5277/Empresa'

  constructor(private http: HttpClient) { }

  listar(): Observable<Empresas[]> {
    return this.http.get<Empresas[]>(this.API)
  }



  criarVaga(idEmpresa: number, novaVaga: Vagas): Observable<Vagas> {
    const url = `${this.API}/${idEmpresa}/vagas`;

    return this.http.post<Vagas>(url, novaVaga);
  }

  criar(empresa: Empresas):Observable<Empresas>{
    return this.http.post<Empresas>(this.API, empresa)
  }

  excluir(id:number):Observable<Empresas>{
    const url = `${this.API}/${id}`
    return this.http.delete<Empresas>(url)
  }

  buscarPorId(id: number): Observable<Empresas>{
    const url = `${this.API}/${id}`
    return this.http.get<Empresas>(url)
  }

  editar(empresa: Empresas): Observable<Empresas>{
    const url = `${this.API}/${empresa.id}`
    return this.http.put<Empresas>(url, empresa)
  }
}
