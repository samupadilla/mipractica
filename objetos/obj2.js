class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }

    nombreCompleto() {
        return this._nombre + ' ' + this._apellido;
    }

}
    const ob=new Persona();
    ob.nombre='anis';
    console.log(ob.nombre);
    ob.nombreCompleto;