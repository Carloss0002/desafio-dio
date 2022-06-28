const pessoa = {
    firstName: 'Carlos',
    lastName : 'Amorim',
    id       : 1,
    fullName: function(){
        return this.firstName+ ' '+this.lastName;
    },
    getId: function(){
        return this.id
    } 
}

console.log(pessoa.fullName())

const HUMAN = {
    nome: 'Isabela'
}

const ANIMAL = {
    nome: 'Murphy'
}

function getSomething(){
    console.log(this.nome)
}

getSomething.call(ANIMAL)

getSomething.apply(HUMAN) // argumentos dentro de um Array []

const OBJ = {
    num1: 2,
    num2: 4
}

function soma(a, b){
    console.log(this.num1 + this.num2 + a + b)
}

soma.call(OBJ, 1,2)
soma.apply(OBJ, [3,10])

//bind

const retornaNomes = function () {
    return this.nome
}

let bruno = retornaNomes.bind({nome: 'Zezé'})

console.log(bruno())