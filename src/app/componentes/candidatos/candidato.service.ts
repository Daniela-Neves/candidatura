import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Candidato } from './candidato';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  private readonly API = 'http://localhost:5277/Candidato'
  private readonly API_Login = 'http://localhost:5277/Candidato/login'

  
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

  getCandidatos(): Observable<Candidato[]> {
    return this.http.get<any>(this.API);
  }

  private candidatoLogadoIdSubject = new BehaviorSubject<number | null>(null);
  candidatoLogadoId$: Observable<number | null> = this.candidatoLogadoIdSubject.asObservable();

  private setCandidatoLogadoId(id: number | null) {
    this.candidatoLogadoIdSubject.next(id);
  }

  
  login(email: string, senha: string): Observable<Candidato | null> {
    const loginUrl = `${this.API_Login}?email=${email}&senha=${senha}`;

    return this.http.get<Candidato>(loginUrl).pipe(
      map(candidato => {
        if (candidato) {
          return candidato;
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
  


  private candidatoLogadoId: number | null = null;  // Inicializado como null

// Método para definir o ID do candidato logado
setLoggedCandidatoId(id: number | null) {
  this.candidatoLogadoId = id;
}

// Método para obter o ID do candidato logado
getLoggedCandidatoId(): number | null {
  return this.candidatoLogadoId;
}

}
