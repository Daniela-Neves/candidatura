export interface Candidato {
  id?: number;
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  confirmacaoSenha: string;
  dataNascimento: string;  // Alterei para string, pois é como está no seu formulário (type="date" retorna string)
  genero: string;  // Se quiser, você pode criar um enum para os gêneros
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
  formacao: string;  // ou enum se houver opções específicas
  curso: string;
  inicioFormacao: string;  // Alterei para string, pois é como está no seu formulário (type="text")
  fimFormacao: string;  // Alterei para string, pois é como está no seu formulário (type="text")
  idiomas: {
    idioma: string;
    nivel: string;
  }[];
  certificados: string[];
}
