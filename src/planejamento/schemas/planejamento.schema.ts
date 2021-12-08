import * as mongoose from 'mongoose';

export const PlanejamentoSchema = new mongoose.Schema({
  _id: String,
  idPlanejamento: String,
  idbuilding: String,
  nome: String,
  nomeCompleto: String,
  grupos: [String],
  planejamento: {
    inicioPlanejado: Date,
    inicioExecucao: Date,
    fimPlanejado: Date,
    fimExecucao: Date,
    tempoTarefa: Date,
    percentualExecutado: Number,
    custoPrevisto: Number,
    custoExecutado: Number,
  },
});
