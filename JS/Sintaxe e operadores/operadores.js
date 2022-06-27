// function numeros(num1, num2){
//     let soma = num1 + num2
//     let mensage = `os numeros ${num1} e ${num2} ${num1 === num2?'são iguais':'não são iguais'} sua soma é ${soma} que é ${soma>10? 'maior que 10':'menor que 10'} ${soma<20? 'e menor que 20': 'maior que 20'}`
   
//      return console.log(mensage)
// }

fraseCompleta(10, 10)

function fraseCompleta(num1, num2){
    let primeiraFrase = respostaNumber(num1, num2)
    let ultimaFrase = compararNumeros(num1, num2)

    console.log(primeiraFrase + ultimaFrase)
}

function respostaNumber(num1, num2){
    let soma = num1 + num2
    let iguais = num1 === num2
    if(iguais){
        return `os numeros ${num1} e ${num2} são iguais, a soma é ${soma}`
    }  

    return `os numeros ${num1} e ${num2} não são iguais, a soma é ${soma}`
}

function compararNumeros(num1, num2){
    let soma = num1 + num2
    let maiorQue = soma > 10
    let menorQue = soma < 20
    let resulta10 = 'menor'
    let resulta20 = 'maior'


    if(maiorQue){
        resulta10 = 'maior'
    }
    if(menorQue){
        resulta20 = 'menor'
    }

    return `que é ${resulta10} que 10  e ${resulta20} que 20`
    // return `${maiorQue? ' maior que 10': ' menor que 10'} e ${menorQue? 'menor que 20': 'menor que 20'}`
}

