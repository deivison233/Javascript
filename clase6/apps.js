 //loop for
 let cont=0,acum=0
 for (let i = 0; i <=100; i++) {
    // acum=acum+i
    acum+=i
    if(i%2==0){
        console.log(`el numero ${i} es par`)
    }else{
        console.log(`el numero ${i} es inpar`)
    }
    
}
console.log(`el acumulador esta en:${acum}`)

//funcion para saber si un numero es par

cons isPair=(num)=>{
    if (num%2==0){
        console.log("el numero es par");
    }else{
        console.log("el numero es impar")
    }
}
isPair(122);
isPair(125);

