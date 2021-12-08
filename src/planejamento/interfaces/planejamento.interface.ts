export default interface Planejamento {
  _id: string;
  idPlanejamento: string;
  idbuilding: string;
  nome: string;
  nomeCompleto: string;
  grupos: [string];
  planejamento: {
    inicioPlanejado: Date;
    inicioExecucao: Date;
    fimPlanejado: Date;
    fimExecucao: Date;
    tempoTarefa: Date;
    percentualExecutado: number;
    custoPrevisto: number;
    custoExecutado: number;
  };
}
