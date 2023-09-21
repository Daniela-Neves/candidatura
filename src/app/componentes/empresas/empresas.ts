import { Vagas } from "../vagas/vagas"

export interface Empresas{
  id?:number
  cnpj:string
  razaoSocial:string
  nomeFantasia?:string,
  endereco:string
  numero:string
  cep:string,
  email:string
  senha:string
  confirmacaoSenha:string
  vagas: Vagas[],
  linkedin:string,
  siteInstitucional:string
}
