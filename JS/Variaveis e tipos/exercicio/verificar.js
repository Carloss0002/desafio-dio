function verificarPalidromo(string){
    if(!string) throw "String inválida";

   return string.split("").reverse().join("") === string
}

console.log(verificarPalidromo('carlos'))