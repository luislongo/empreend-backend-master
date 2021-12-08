import * as mongoose from 'mongoose';

export const QuantitativoSchema = new mongoose.Schema({
  _id: String,
  descricao: String,
  id: String,
  idPlanejamento: String,
  idbuilding: String,
  indice: String,
  objetosBIM: [
    {
      guidIFC: String,
      guidVisus: String,
      quantidade: Number,
    },
  ],
  quantidade: Number,
  unidade: String,
});
