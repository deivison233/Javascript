// funcion asincronica
const saludar=(nombrePersona)=>{
   setTimeout(() => {
    console.log(`hola ${nombrePersona}`)
   }, 3000);
    }
    
    const pedirNombre=(callback)=>{
        let nombre = prompt("ingrese nombre")
        callback(nombre)
    }
    
    pedirNombre(saludar)