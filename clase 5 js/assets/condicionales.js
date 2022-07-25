let age=19;
//condicionales con if 
if (age>18){
    //console.log("eres mayor de edad");
    document.write("eres mayor de edad")
}

//condicionales con if y else

if (age>=18){

    console.log("eres mayor de edad")
}else{
    console.log("eres menor de edad")
}
//condicionales con switch

localStorage personName="deivison";
switch (personName) {
    console.log("le gusta el futbol");
    break;
  case "estevenson":  
     default:console.log("es el monitor de front")
     break;
  default:
      console.log("esta es una persona") 
      break;    
}
//condicional con operador ternario
let personGenre="F"

personGenre =="F"? console.log("es una mujer"):console.log("es un hombre")
