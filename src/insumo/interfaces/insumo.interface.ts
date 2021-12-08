export default interface Insumo {
  _id?: string;
  idbuilding: string;
  idOrcamento: string;
  idPlanejamento: string;
  indice: string;
  descricao: string;
  unidade: string;
  quantidade: number;
  objetosBIM: [
    {
      guidIFC: string;
      guidVisus: string;
      quantidade: number;
    },
  ];
  custoTotal: {
    total: number;
    totalSemBDI: number;
    material: number;
    equipamento: number;
    transporte: number;
    maoDeObra: number;
    terceirizado: number;
    verba: number;
    comissionamento: number;
    outros: number;
  };
  custoUnitario: {
    total: number;
    totalSemBDI: number;
    material: number;
    equipamento: number;
    transporte: number;
    maoDeObra: number;
    terceirizado: number;
    verba: number;
    comissionamento: number;
    outros: number;
  };
  codigo: number;
  tabela: string;
  tipo: string;
}
