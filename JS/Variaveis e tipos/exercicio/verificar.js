function verificarPalidromo(string){
    if(!string) return;

   return string.split("").reverse().join("") === string
}

console.log(verificarPalidromo('carlos'))