let currentNumberWraper = document.getElementById('currentNumber')
let currentNumber = 0
let getTitle = document.getElementsByTagName('h1')[0]
let invalid = document.getElementsByClassName('invalid')[0]


function increment(){  
   invalid.className = 'invalid' 
   getTitle.style.color ='#fff'
   
   currentNumber = currentNumber+1
   currentNumberWraper.innerHTML = currentNumber
   console.log(currentNumber)
}

function decrement(){
    if(currentNumber > 0){
        
        
        currentNumber = currentNumber - 1
        currentNumberWraper.innerHTML = currentNumber
    }else{
        invalid.className = 'valid'
        getTitle.style.color= 'red'
   }
}