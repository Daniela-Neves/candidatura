import { Vagas } from "../vagas/vagas"

export interface Empresas{
  id:number
  cnpj:string
  razaoSocial:string
  nomeFantasia?:string,
  endereco:{
    cep:string,
    rua:string,
    numero:number,
    cidade:string,
    estado:string    
  },
  email:string
  senha:string
  linkedin:string,
  siteInstitucional:string
}