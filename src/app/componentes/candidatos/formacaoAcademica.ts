import { Curriculo } from "./curriculo";

export interface FormacaoAcademica {
    candidatoId: number;
    curriculo:Curriculo;
    nivelFormacao: string;
    curso: string;
    dataInicio: string;
    dataFim: string;
}