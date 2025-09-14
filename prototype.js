//prototypal inheritance


let animal ={
    eats :true
}

let rabbits ={
    jumps:true
} 


rabbits.__proto__ = animal ; //sets rabbit prototype animal

console.log(rabbits)