const [x,y]=[100,200];
const [r1,s1]=[1,2];

console.log(x);
console.log(y);
//--------------------------------------
let a, b, rest;
//[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

//-----------------------------------------------

const multiple=function(){
    var a=()=>'a';
    var b=()=>'b';
    var c=()=>'c';
    return [a,b,c];
}

const [p,q,r]=multiple();
console.log(p());
console.log(q());
console.log(r());

//-------------------------------------
const getPersona = () => {
    return ['Edu', 'Lazaro'];
  }

  const [nombre, apellido] = getPersona();
  console.log(nombre);
  console.log(apellido);

  //-------------------------------------------
  const getPersona2 = () => {
    return {
      nombre2: 'Edu',
      apellido2: 'Lazaro',
      funcion:function(){
        return "soy función";
      },
    };
  }
//para destructurar deben llamarse igual que los miembros
  const {nombre2, apellido2,funcion} = getPersona2();
  console.log(nombre2);
  console.log(apellido2);
  console.log(funcion());