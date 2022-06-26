function par(props){
   return console.log(props.filter(d => d%2 == 0))
}

par([2, 4, 5, 8, 10, 13 , 15, 18, 19 ])