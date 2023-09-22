export interface Curriculo {
    candidatoId: number;
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
        endereco: string;
        numero: string;
        cidade: string;
        estado: string;
    };
    linkedin: string;
}
