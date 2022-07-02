const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
let button = document.getElementById('change-cat')

const GET_CATS = async ()=>{
    try {
        const data = await fetch(BASE_URL, {
            mode: 'no-cors',
            method: 'GET',
            headers:{
                'Access-Control-Allow-Origin' : 'http://127.0.0.1:5500/',
                'Origin' : BASE_URL
            }
                                             
    })
        const json = await data.json()
        
        return console.log(json)
    } catch (error) {
        console.log(error.mensage)
    }
}

const loadImg = async () => {
    const IMG = document.getElementsByTagName('img')[0]
    IMG.src = await GET_CATS()
}





button.addEventListener('click', loadImg)

loadImg()