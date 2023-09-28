import { Curriculo } from "./curriculo";

export interface ExperienciaProfissional {
    candidatoId: number;
    curriculo:Curriculo;
    titulo: string;
    tipoEmprego: string;
    nomeEmpresa: string;
    inicio: string;
    fim: string;
}