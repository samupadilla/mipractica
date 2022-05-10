function Person(name,secondName){
    this.name=name;
    this.secondName=secondName;
  }
  const p=new Person("Luis","Fino");
  //p
  Person.prototype.dni=123456;
  console.log(p['name']);
  
  const z={
    name:'oscar',
    secname:'vargas'
  }
  //para acceder por clave se usan comillas
  console.log(z["name"]);

  

