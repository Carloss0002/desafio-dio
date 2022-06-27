(
    function(){
        let name = 'Carlos Eduardo Freitas Amorim'
        return console.log(name)
    }
)() //function 'autoinvocavel'

function findMax(){
    let max = -Infinity

    for(let i = 0; i<arguments.length; i++){
        if(arguments[i]>max){
            max = arguments[i]
        }
    }
    return max
} // object arguments

console.log(findMax(1,2,3,6,90,1))

/* Arrays for function |
                       V 
*/

function sum(x, y, z){
    return x + y + z
}

const NUMBERS_FOR_FUNCTION = [1, 2, 3]

console.log(sum(...NUMBERS_FOR_FUNCTION))

/* Object destructuring |
                        V
*/

const USERS_DATA = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
}

function userId({id}){
    return id
}

function getFullName({fullName: {firstName: first, lastName: last}}){
    return `${first} ${last}`
}

console.log(userId(USERS_DATA))

console.log(getFullName(USERS_DATA))