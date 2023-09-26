import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Everymind } from './everymind';
import { catchError, map} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EverymindService {

  private readonly API = 'http://localhost:5277/Admnistrador'
  private readonly API_Login = 'http://localhost:5277/Admnistrador/login'

  constructor(private http: HttpClient) { }


  listar(): Observable<Everymind[]> {

    return this.http.get<Everymind[]>(this.API)
  }

  listarPorEverymind(id:number): Observable<Everymind[]> {
    const url = `${this.API}/everymind/${id}`;
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

  login(email: string, senha: string): Observable<Everymind | null> {
    const loginUrl = `${this.API_Login}?email=${email}&senha=${senha}`;
    
    return this.http.get<Everymind>(loginUrl).pipe(
      map(everymind => {
        if (everymind) {
          return everymind;
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
