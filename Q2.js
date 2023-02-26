let numTest = 233 //Número a ser testado

function PertenceAFib(numTest){
    let i   =  1    

    let FibPrim    = 0
    let FibPenul    = 1
    let FibUltim    = 0

    while(i > 0){

        FibPrim = FibPenul + FibUltim
        FibUltim = FibPenul
        FibPenul = FibPrim

        if(FibPrim === numTest){
            return "Pertence a Sequência";
        }else if(FibPrim > numTest){
            return "Não Pertence a Sequência";
        }
    }
}

console.log(PertenceAFib(numTest))