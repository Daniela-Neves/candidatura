import { Candidato } from "../candidatos/candidato"


export interface Vagas{
  id?:number
  empresaId:number
  nome:string
  tipoVaga:string
  dataPublicacao:string
  cidade:string
  estado:string
  salario:string
  descricao:string
  responsabilidades:string
  qualificacoes:string
  modalidade:string
  statusProcesso?:string
}