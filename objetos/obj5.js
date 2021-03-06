class Animal {

    constructor(name = 'anonymous', legs = 4, noise = 'nothing') {

      this.type = 'animal';
      this.name = name;
      this.legs = legs;
      this.noise = noise;
    }
    speak() {
      console.log(`${this.name} says "${this.noise}"`);
    }
    walk() {
      console.log(`${this.name} walks on ${this.legs} legs`);
    }
    // setter
    set eats(food) {
      this.food = food;
    }
    // getter
    get dinner() {
      return `${this.name} eats ${this.food || 'nothing'} for dinner.`;
    }
  
  }
  
  let ob=new Animal();
  let rex = new Animal('Rex', 4, 'woof');
  rex.eats = 'anything';
  console.log( rex.dinner );  // Rex eats anything for dinner.
  console.log( ob.dinner );  // Rex eats anything for dinner.
  