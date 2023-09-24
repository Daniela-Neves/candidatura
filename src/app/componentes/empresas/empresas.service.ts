import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Empresas } from './empresas';
import { Observable } from 'rxjs';
import { Vagas } from '../vagas/vagas';
import { catchError, map} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  private readonly API = 'http://localhost:5277/Empresa'
  private readonly API_Login = 'http://localhost:5277/Empresa/login'

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

  login(email: string, senha: string): Observable<Empresas | null> {
    const loginUrl = `${this.API_Login}?email=${email}&senha=${senha}`;

    return this.http.get<Empresas>(loginUrl).pipe(
      map(empresa => {
        if (empresa) {
          return empresa;
        } else {
          console.error('Login falhou. E-mail ou senha incorretos.');
          return null;
        }
      }),
      catchError(() => {
        console.error('Erro ao realizar o login.');
        return of(null);
      })
    );
  }

}
