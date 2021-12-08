import * as mongoose from 'mongoose';

export const ObjetoBIMSchema = new mongoose.Schema({
  idbuilding: String,
  guidIFC: String,
  guidVisus: String,
  pavimento: String,
  disciplina: String,
  entidade: String,
});
