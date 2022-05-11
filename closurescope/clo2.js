const greet=(prefix)=>{
    var pre=prefix;
    var n=0;
    const name=(nombre)=>{
        n++;
        return `${pre} ${nombre} eres el numero ${n}`;
    }
    return name;
}

const saludo=greet('hola');
console.log(saludo('Samuel'));
console.log(saludo('ricardo'));
console.log(saludo('Jose'));