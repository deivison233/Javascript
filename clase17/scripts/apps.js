// funcion callback sincronica
const saludar=(nombrePersona)=>{
console.log(`hola ${nombrePersona}`)
}

const pedirNombre=(callback)=>{
    let nombre = prompt("ingrese nombre")
    callback(nombre)
}

pedirNombre(saludar)