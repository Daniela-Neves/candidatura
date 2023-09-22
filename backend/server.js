const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());  // Adicionando CORS para permitir requisições do frontend

// Configuração do banco de dados
const dbConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const mongoURI = 'mongodb://localhost:27017/TalenTudo';


// Conexão com o MongoDB
mongoose.connect(mongoURI, dbConfig);

// Verifique se a conexão com o MongoDB foi bem-sucedida
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB com sucesso!');
});

// Defina um modelo de dados do MongoDB (exemplo)
const CandidatoSchema = new mongoose.Schema({
  nome: String,
  email: String,
});

const Candidato = mongoose.model('Candidato', CandidatoSchema);

// Rota para receber dados do Angular e salvar no MongoDB
app.post('/api/salvar-dados', async (req, res) => {
  const dados = req.body; // Dados enviados pelo Angular

  try {
    // Exemplo: Salvando os dados no MongoDB
    const candidato = new Candidato(dados);
    await candidato.save();
    res.json({ message: 'Dados salvos com sucesso no MongoDB!' });
  } catch (error) {
    console.error('Erro ao salvar os dados no MongoDB:', error);
    res.status(500).json({ error: 'Erro ao salvar os dados no MongoDB.' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
