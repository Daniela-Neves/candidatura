import { Candidato } from "../candidatos/candidato"

export interface Vagas{
  id?:number
  nome:string
  tipoContratacao:string
  dataPublicacao:string
  cidade:string
  estado:string
  salario:string
  sobreAVaga:string
  responsabilidades:string
  qualificacoes:string
  modalidade:string
  candidatos: Candidato[]
  statusProcesso:string
}