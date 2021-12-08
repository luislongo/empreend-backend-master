export default interface Quantitativo {
  _id: string;
  descricao: string;
  id: string;
  idPlanejamento: string;
  idbuilding: string;
  indice: string;
  objetosBIM: [
    {
      guidIFC: string;
      guidVisus: string;
      quantidade: number;
    },
  ];
  quantidade: number;
  unidade: string;
}
