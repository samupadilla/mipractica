var a={
nombre:"pedro",
apellido:"perez",
cursos:[],
};
a.cursos.push("algoritmos");
console.log(a.cursos);
for (const key in a) {
    console.log(key);    
    }
