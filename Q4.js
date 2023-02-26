const FaturaSP = 67836.43;
const FaturaRJ = 36678.66;
const FaturaMG = 29229.88;
const FaturaES = 27165.48;
const FaturaOu = 19849.53;

const FaturaTot = FaturaSP + FaturaRJ + FaturaMG + FaturaES + FaturaOu;

console.log("Faturamento de SP na visão geral: "        + (FaturaSP/FaturaTot) * 100 + "%")
console.log("Faturamento de RJ na visão geral: "        + (FaturaRJ/FaturaTot) * 100 + "%")
console.log("Faturamento de MG na visão geral: "        + (FaturaMG/FaturaTot) * 100 + "%")
console.log("Faturamento de ES na visão geral: "        + (FaturaES/FaturaTot) * 100 + "%")
console.log("Faturamento de Outros na visão geral: "    + (FaturaOu/FaturaTot) * 100 + "%")
