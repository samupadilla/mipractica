console.log('COMENZAMOS CON JS');
var x=1200;//=prompt('Ingrese numero');
console.log('Usted'+x+'ingreso...'+x);
console.log(`otra ${x} forma de ${x} concatenar`);

// babel javascript
// auto close tag
// color highlight
// ESLint
// indent rainbow
// live server
// Peacock
// Prettier
// Trailing Spaces

//prueba settimeout 
//let i=0;
for (let i = 0; i < 5; i++) {
    //console.log(`antes de setTimeout ${i}`);
    setTimeout(()=>{
        console.log(`Dentro de settimeoutA ${i}`);
    },3000)
    
    setTimeout(()=>{
        console.log(`Dentro de settimeoutB ${i}`);
    },2000)
    
}