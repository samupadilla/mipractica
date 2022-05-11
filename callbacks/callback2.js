//Callbacks = procesos asincronos
const imprimir=(msj)=>{
    console.log(msj);
}

const sumar=(n1,n2,callback)=>{
    let res=n1+n2;
    callback(`Resultado: ${res}`);
}

sumar(23,321,imprimir);

//CON ASINCRONISMO SetTimeout

function miFuncionCallback(){
    console.log('saludo asincrono despues de 2 segundos');
}
//Cuando pasamos como referencia la función, no lleva paréntesis
//se puede pasar directamente la función
setTimeout(miFuncionCallback,2000);
setTimeout(()=>console.log('Saludo asincrono'),1000)

//SET INTERVAL
let reloj=()=>{
    let fecha=new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}
setInterval(reloj,1000);


//setTimeout(setInterval(reloj,1000),5000);// revisar
//Intento callback cascada triple
// let reloj2=()=>{
//     let fecha=new Date();
//     console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
// }
// let intervalo=()=>{
//     return setInterval(reloj2,1000);
// }

// setTimeout(intervalo,2000);

//clearInterval(refreshIntervalId);// profundizar esta función
