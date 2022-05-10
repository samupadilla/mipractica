const a="sam";
const b=new String("sam");
const c=new String("sam");
console.log(typeof(a));
console.log(typeof(b));
console.log(b);
b.dni=123;
console.log(b);
//La comparación con a da iguales pero con b o con c 
//es diferente porque son objetos, no strigs
if (a==="sam") {
    console.log("iguales")
} else {
    console.log("diferentes")
}