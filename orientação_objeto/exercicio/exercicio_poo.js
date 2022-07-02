class banco{
    constructor(agencia, tipo, numero){
         this.agencia = agencia
         this.tipo    = tipo
         this.numero = numero
         this._saldo   = 0
    }
    sacar(valor){
        if(this._saldo<valor){
            return 'saque negado'
        }
        
        this._saldo = this.saldo - valor
    }
    depositar(valor){
        this._saldo = this._saldo+valor
    }
    set saldo(valor){
        this._saldo =valor
    }
    get saldo(){
        return this._saldo
    }
}

class contaCorrente extends banco {
    constructor(agencia, numero, cartao){
        super(agencia, numero)
        this.tipo = 'corrente'
        this._cartao = cartao
    }

    get cartao(){
        return this._cartao
    }
    set cartao(valor){
        this._cartao = valor
    }
}

class contaPoupanca extends banco{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = 'poupança'
    }
}

class contaUni extends banco{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = 'universitaria'
    }

    sacar(valor){
        if(valor >= 500){
            return 'Operação negada'
        }

        this._saldo = this._saldo - valor
    }
}

const minhaConta = new contaCorrente(1, 234, true)
const contauni = new contaUni(1, 22)

contauni.depositar(1000)
contauni.sacar(500)

minhaConta.depositar(1000)

minhaConta.sacar(800)

console.log(contauni)

