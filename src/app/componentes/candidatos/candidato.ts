export interface Candidato {
    id: number;
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    dataNascimento: string;
    genero: string;
    identificacao: string;
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
    formacao: {
        fundamental: string;
        ensinoMedio: string;
        ensinoSuperior: string;
        mestrado: string;
        doutorado: string;
        inicio: string;
        fim: string;
    };
    idiomas: [
        {
            idioma: string,
            nivel: string
        }
    ],
    certificados: [
        {
            nome: string,
            organizacao: string,
            dataEmissao: string
        }
    ],
    experiencia: {
        titulo: string;
        tipoEmprego: string;
        nomeEmpresa: string;
        inicio: string;
        fim: string;
    };
}
