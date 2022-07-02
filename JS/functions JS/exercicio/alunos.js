let alunos = [
    {
        nome: 'Roberto',
        nota: 9.8,
        turma: '1B',
    },
    {
        nome: 'Clara',
        nota: 5.0,
        turma: '2A',
    },
    {
        nome: 'Carlos',
        nota: 8.0,
        turma: '3A',
    },
    {
        nome: 'Mari',
        nota:10.0,
        turma: '3A',
    },
    {
        nome: 'jão',
        nota: 4.0,
        turma: '2A',
    },
]

function alunosAprovados(notas, media = 6.0){
    
    notas.filter(aprovados => aprovados.nota >= media)
       
    
}

alunosAprovados(alunos, 7.0)

function alunosAprovados2(arr, media){
    let aprovados = [];

    for(let i = 0; i<arr.length; i++){
        const {nota , nome} = arr[i]


        if(nota>=media){
           aprovados.push(nome)
        }
    }
    return aprovados
}

console.log(alunosAprovados2(alunos, 5.0))