import * as mongoose from 'mongoose';

export const EmpreendimentoSchema = new mongoose.Schema({
  idbuilding: String,
  dados: {
    nome: String,
    pais: String,
    estado: String,
    cidade: String,
    endereco: String,
    cliente: String,
    descricao: String,
    areaConstruida: String,
    areaTerreno: String,
    bdi: String,
  },
  custo: {
    total: Number,
    totalSemBDI: Number,
    material: Number,
    equipamento: Number,
    transporte: Number,
    maoDeObra: Number,
    terceirizado: Number,
    verba: Number,
    comissionamento: Number,
    outros: Number,
  },
});
