import { Vagas } from "../vagas/vagas"

export interface Empresas{
  id?:number
  cnpj:string
  razaoSocial:string
  endereco:string
  numero:string
  email:string
  senha:string
  confirmacaoSenha:string
  vagas: Vagas[]
}
