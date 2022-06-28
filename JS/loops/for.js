function multiplicarPorDois(arr){
    let multiplicados = []

    for(let i = 0; i<arr.length; i++){
        multiplicados.push(arr[i]*2)
    }
    return multiplicados
}

console.log(multiplicarPorDois([1,4,6,9,10]))

// while

let listUsers = [
                  {
                    nome: 'Carlos', 
                    idade: 20, 
                    status:'desempregado'
                  }, 
                  {
                    nome: 'Edu',
                    idade: 24,
                    status: 'Empregado' 
                  }, 
                  {
                     nome: 'Clara',
                     idade: 90,
                     status: 'Aposentada',             
                  }
                ]

function listaUser(obj){
    for(prop in obj){
        console.log(obj[prop])
    }
}    

listaUser(listUsers)