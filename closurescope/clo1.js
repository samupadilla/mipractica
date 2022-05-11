const ahorro=coins=>{
    var saveCoins=0;
    saveCoins+=coins;
    console.log(`Ahorrado: ${saveCoins}`)
}

ahorro(1);
ahorro(2);
ahorro(3);

//CON CLOSURE

const miAhorro=()=>{
    var ahorrado=0;
    const insertarMonedas=(coins)=>{
     ahorrado+=coins;   
     return ahorrado;
    }
    return insertarMonedas;
}
const x=miAhorro();
console.log(x(10));
console.log(x(10));




//VERSION DE PRUEBA CON THIS 
// const miAhorro=()=>{
//     this.ahorrado=0;
//     const insertarMonedas=(coins)=>{
//      this.ahorrado+=coins;   
//      return this.ahorrado;
//     }
//     return insertarMonedas;
// }
// const x=miAhorro();
// console.log(x(10));
// console.log(x(10));
// console.log(x.ahorrado);


//VERSION SIN CLOSURE - NO SE RENUEVA monto
// function ahorro(coin){
//     var monto=0
//     monto+=coin;

// return monto;
// }
// console.log(ahorro(10));
// console.log(ahorro(10));
// console.log(ahorro(10));