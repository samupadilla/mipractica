function saludar(nombre){
    //console.log("Hola");
    return `Hola ${nombre}
    `;//este salto se imprime gracias a las comillas francesas
}

var x=saludar('Maria');
var y=saludar('Jose');
var z=saludar('Juan');
var w=saludar('Ana');
var a=saludar('Pedro');
console.log(x+y+z+w+a);

//Con un parametro no lleva paréntesis o es opcional
flecha=nombre=>console.log(`Hola ${nombre}`);
flecha('Sam');

// let a=()=>"hola";
// console.log(a());

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));

//SIN PARAMETROS
var veo=()=>console.log("veo veo");
veo();
//Si retorna no necesita la palabra reservada return
var veomas=()=>'veo mas';
console.log(veomas());
