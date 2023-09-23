import { Candidato } from "./candidato";

export interface Curriculo {
    candidatoId: number;
    candidato?: Candidato;
    dataNascimento: string;
    genero: string;
    raca: string;
    deficiencias: {
        fisica: boolean;
        auditiva: boolean;
        visual: boolean;
        intelectual: boolean;
        autista: boolean;
    };
    endereco: {
        cep: string;
        rua: string;
        numero: string;
        cidade: string;
        estado: string;
    };
    linkedin: string;
}
