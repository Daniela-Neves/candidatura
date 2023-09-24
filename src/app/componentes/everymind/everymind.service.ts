import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Everymind } from './everymind';

@Injectable({
  providedIn: 'root'
})
export class EverymindService {

  private readonly API = 'http://localhost:5277/Vaga'

  constructor(private http: HttpClient) { }


  listar(): Observable<Everymind[]> {

    return this.http.get<Everymind[]>(this.API)
  }

  listarPorEmpresa(id:number): Observable<Everymind[]> {
    const url = `${this.API}/empresa/${id}`;
    return this.http.get<Everymind[]>(url)
  }

  criar(novaVaga: Everymind): Observable<Everymind> {
    const url = `${this.API}`;
    return this.http.post<Everymind>(url, novaVaga);
  }

  excluir(id:number):Observable<Everymind>{
    const url = `${this.API}/${id}`
    return this.http.delete<Everymind>(url)
  }

  buscarPorId(id: number): Observable<Everymind>{
    const url = `${this.API}/${id}`
    return this.http.get<Everymind>(url)
  }

  editar(Everymind: Everymind): Observable<Everymind>{
    const url = `${this.API}/${Everymind.id}`
    return this.http.put<Everymind>(url, Everymind)
  }
}
