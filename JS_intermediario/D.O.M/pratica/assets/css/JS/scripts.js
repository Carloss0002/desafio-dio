let button = document.getElementById('mode-selector')
let body = document.querySelector('body')
let getH1 = document.getElementById('page-title')
let getFooter = document.querySelector('footer')

const CLASS_NAME = 'dark-mode'

function aplicarDarkMode(){
    changeText()
    changeClass()
}


function changeClass(){
    body.classList.toggle(CLASS_NAME)   
    button.classList.toggle(CLASS_NAME)
    getFooter.classList.toggle(CLASS_NAME)
}


function changeText(){
    const LIGTH_MODE = 'Ligth Mode' 
    const DARK_MODE =  'Dark Mode'

    if(button.className != 'dark-mode'){
        button.innerHTML = LIGTH_MODE 
        getH1.innerHTML = `${DARK_MODE} ON` 
    } else{
        getH1.innerHTML = `${LIGTH_MODE} ON`
        button.innerHTML = DARK_MODE
    }
}


button.addEventListener('click', aplicarDarkMode)