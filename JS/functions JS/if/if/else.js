function numeroPar(num){
    const PAR = num%2

    if(PAR === 0){
       return console.log(`${num} é um numero par`)
    }

    return console.log(`${num} não é um numero par`)
}

// numeroPar(2)

// switch/case

function getAnimal(id = null){
    switch(id){
        case 1:
            return "Cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default:
            return "peixe"            
    }
}

console.log(getAnimal())