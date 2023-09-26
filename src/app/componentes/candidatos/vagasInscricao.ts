import { Empresas } from "../empresas/empresas"
import { Vagas } from "../vagas/vagas"
import { Candidato } from "./candidato"


export interface VagasInscricao{
  vaga: {
    id: number,
    empresa: Empresas
    nome: string,
    textoTipoVaga: string,
    tipoVaga:string,
    dataPublicacao:string,
    cidade: string,
    estado: string,
    salario: 0,
    descricao: string,
    responsabilidades: string,
    qualificacoes: string,
    textoModalidade: string,
    modalidade: string
  },
  statusInscricao: string
}