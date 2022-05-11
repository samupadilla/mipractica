function soyAsincrona(callback){
    setTimeout(function(){
        console.log('Estoy siendo asincrona');
        callback();
    },1000);
}

console.log('Iniciando proceso');
soyAsincrona(function(){
    console.log('Terminando proceso');
});

//mas complejo
function hola(nombre,callback){
    setTimeout(function(){
        console.log('Hola '+nombre);
        callback();
    },1000);
}

console.log('Iniciando proceso');
hola('Samuel',function(){
    console.log('Terminando proceso');
});