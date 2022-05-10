const x=(vec)=>{
    let suma=0;
for (let i = 0; i < vec.length; i++) {
    suma = suma+vec[i];    
}
return suma;
}

const v=[1,2,3,4,5];
console.log(x(v));
