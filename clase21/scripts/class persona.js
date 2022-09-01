class personas{
    nombre="";
    ciudad="";
    edad=0;
    genero="";

    constructor(nombre,ciudad,edad,genero){
        this.nombre=nombre;
        this.ciudad=ciudad;
        this.edad=edad;
        this.genero=genero;

    }
}
const persona1=new personas("Deivison","Medellin",34,"Masculino")
console.log(persona1)