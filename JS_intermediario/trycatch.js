function palidromo(string){
    const MEU_ERRO =  new Error('string invalida')
    
    if(!string) throw MEU_ERRO

    return console.log(string.split('').reverse().join('') == string)
}

(
    function(string){
        try{
            palidromo(string)
        }
        catch(e){
            throw(e)
        }
        finally{
            console.log('A string enviada foi ' + string)
        }
    }
)('jão')