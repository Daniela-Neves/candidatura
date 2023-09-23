import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Inscricao } from './inscricao';
import { Observable } from 'rxjs';
import { Vagas } from '../vagas/vagas';
import { catchError, map} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {

  private readonly API = 'http://localhost:5277/Inscricao'

  

  constructor(private http: HttpClient) { }

  listar(): Observable<Inscricao[]> {
    return this.http.get<Inscricao[]>(this.API)
  }



  criarVaga(idEmpresa: number, novaVaga: Vagas): Observable<Vagas> {
    const url = `${this.API}/${idEmpresa}/vagas`;

    return this.http.post<Vagas>(url, novaVaga);
  }

  criar(empresa: Inscricao):Observable<Inscricao>{
    return this.http.post<Inscricao>(this.API, empresa)
  }

  excluir(id:number):Observable<Inscricao>{
    const url = `${this.API}/${id}`
    return this.http.delete<Inscricao>(url)
  }

  buscarPorId(id: number): Observable<Inscricao>{
    const url = `${this.API}/${id}`
    return this.http.get<Inscricao>(url)
  }

  // editar(empresa: Inscricao): Observable<Inscricao>{
  //   const url = `${this.API}/${empresa.id}`
  //   return this.http.put<Inscricao>(url, empresa)
  // }

  // login(email: string, senha: string): Observable<Inscricao | null> {
  //   const loginUrl = `${this.API_Login}?email=${email}&senha=${senha}`;

  //   return this.http.get<Inscricao>(loginUrl).pipe(
  //     map(empresa => {
  //       if (empresa) {
  //         return empresa;
  //       } else {
  //         console.error('Login falhou. E-mail ou senha incorretos.');
  //         return null;
  //       }
  //     }),
  //     catchError(() => {
  //       console.error('Erro ao realizar o login.');
  //       return of(null);
  //     })
  //   );
  // }
  
}
