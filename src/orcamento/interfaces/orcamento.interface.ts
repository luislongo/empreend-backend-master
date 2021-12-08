import Custo from './custo.interface';

export default interface Orcamento {
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
  custoTotal: Custo;
  custoUnitario: Custo;
  codigo: number;
  tabela: string;
  tipo: string;
}
