let menorFat    =   30000
let menorFatDia =   0

let maiorFat    =   0
let maiorFatDia =   0

let mediaMes    =   0
let DiasUteis   =   0

let fatMaiMedi  =   0

const Data = require('./dados.json');

const FaturaDia = JSON.parse(JSON.stringify(Data))

for(let i = 0; i < FaturaDia.length; i++){

    let valor   =   (parseFloat(FaturaDia[i].valor));
    let dia     =   (parseFloat(FaturaDia[i].dia));

    if(valor > 0){
        DiasUteis ++;
        mediaMes = mediaMes + valor;      
        
        if(valor > maiorFat){
            maiorFat = valor
            maiorFatDia = dia
        }
        if(valor < menorFat){
            menorFat = valor
            menorFatDia = dia
        }

    }
}

console.log("O dia com o menor Faturamento foi dia: "+menorFatDia+" no valor de R$:"+ menorFat)
console.log("O dia com o maior Faturamento foi dia: "+maiorFatDia+" no valor de R$:"+ maiorFat)

for(let i = 0; i < FaturaDia.length; i++){

    let valor   =   (parseFloat(FaturaDia[i].valor));

    if(valor > (mediaMes/DiasUteis)){      
        fatMaiMedi ++;
    }
}

console.log("O número de dias do mês com Faturamento maior que a média mensal foram de "+fatMaiMedi+" dias")