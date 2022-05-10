//function.js en el video
const fruits=()=>{
    let fruit='apple';    
    console.log(fruit);
}
//let fruit="fuera";
fruits();
console.log(fruit);


const anotherFunction=()=>{
    //probar con let y var para explicar
    for (let i = 0; i < 10; i++) {
        setTimeout(()=>{
            console.log(i);
        },1000)        
    }
};

anotherFunction();