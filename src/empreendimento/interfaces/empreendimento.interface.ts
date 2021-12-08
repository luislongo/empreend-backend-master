export default interface Empreendimento {
  _id?: string;
  idbuilding: string;
  dados: {
    nome: string;
    pais: string;
    estado: string;
    cidade: string;
    endereco: string;
    cliente: string;
    descricao: string;
    areaConstruida: number;
    areaTerreno: number;
    bdi: number;
  };
  custo: {
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
}
