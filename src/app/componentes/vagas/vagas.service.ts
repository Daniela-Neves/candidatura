import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Vagas } from './vagas';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VagasService {

  private readonly API = 'http://localhost:5277/Vaga'

  constructor(private http: HttpClient) { }


  listar(): Observable<Vagas[]> {

    return this.http.get<Vagas[]>(this.API)
  }

  listarPorEmpresa(id:number): Observable<Vagas[]> {
    const url = `${this.API}/empresa/${id}`;
    return this.http.get<Vagas[]>(url)
  }

  criar(novaVaga: Vagas): Observable<Vagas> {
    const url = `${this.API}`;
    return this.http.post<Vagas>(url, novaVaga);
  }

  excluir(id:number):Observable<Vagas>{
    const url = `${this.API}/${id}`
    return this.http.delete<Vagas>(url)
  }

  buscarPorId(id: number): Observable<Vagas>{
    const url = `${this.API}/${id}`
    return this.http.get<Vagas>(url)
  }

  editar(vagas: Vagas): Observable<Vagas>{
    const url = `${this.API}/${vagas.id}`
    return this.http.put<Vagas>(url, vagas)
  }
}