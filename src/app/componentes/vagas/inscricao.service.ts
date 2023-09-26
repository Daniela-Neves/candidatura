import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Inscricao } from './inscricao';
import { Observable } from 'rxjs';
import { Vagas } from '../vagas/vagas';
import { catchError, map} from 'rxjs/operators';
import { of } from 'rxjs';
import { VagasInscricao } from '../candidatos/vagasInscricao';
import { CandidatoInscricao } from './vaga/candidatoInscricao';

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {

  private readonly API = 'http://localhost:5277/Inscricao'
  private readonly API_Dashboard = 'http://localhost:5277/Dashboard'

  

  constructor(private http: HttpClient) { }

  listar(): Observable<Inscricao[]> {
    return this.http.get<Inscricao[]>(this.API)
  }

  listarPorEmpresa(idEmpresa: number): Observable<Number> {
    const url = `http://localhost:5277/quantidadeInscricoes?idEmpresa=${idEmpresa}`
    return this.http.get<Number>(url)
  }

  criarVaga(idEmpresa: number, novaVaga: Vagas): Observable<Vagas> {
    const url = `${this.API}/${idEmpresa}/vagas`;

    return this.http.post<Vagas>(url, novaVaga);
  }

  criar(inscricao: Inscricao):Observable<Inscricao>{
    return this.http.post<Inscricao>(this.API, inscricao)
  }

  excluir(id:number):Observable<Inscricao>{
    const url = `${this.API}/${id}`
    return this.http.delete<Inscricao>(url)
  }

  buscarPorId(id: number): Observable<Inscricao>{
    const url = `${this.API}/${id}`
    return this.http.get<Inscricao>(url)
  }

  buscarPorCandidato(id:number): Observable<VagasInscricao[]>{
    const url = `${this.API}/candidato/${id}`
    return this.http.get<VagasInscricao[]>(url)
  }

  buscarPorVaga(id:number): Observable<CandidatoInscricao[]>{
    const url = `${this.API}/vaga/${id}`
    return this.http.get<CandidatoInscricao[]>(url)
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
  
  atualizarStatus(idVaga:number, idCandidato:number,statusInscricao:Inscricao): Observable<Inscricao>{
    const url = `${this.API}?vagaId=${idVaga}&candidatoId=${idCandidato}`
    return this.http.put<Inscricao>(url,statusInscricao)
  }

}
