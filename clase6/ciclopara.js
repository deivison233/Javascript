let numeros=[1,2,3,4,5,6];

console.log(numeros)//imprime el vector
console.log(numeros.lenght)//imprimr el tamaño del vector
console.warn("ciclo para con vector")
for (let i = 0; i < numeros.length; i++) {
 console.log(numeros[i]*2)
    
}
//ciclo for of
console.warn("for of")
for (const numero of numeros) {
    console.log(numero)
}

//ciclo for in
console.warn("for in")
for (const key in numeros) {
    console.log(numeros[key])
 
        
    }
//ciclo for each
console.warn("for each")
numeros.forEach(element => {
    console.log(element)
});

//ciclo while(mientras)
console.warn("ciclo while")
let n=0;

while (n<=5){
    console.log(n)
    n++
}
n=0;

//ciclo do while
console.warn("ciclo do while")
do{
    console.log(n)
    n++
}while (n<=10);

//palabra reservada break
console.warn("break")

for (let index = 0; 5<;index++) {
    if (index==2) {
       // console.log(index)
        break
    }
    console.log(index)
}
//palabra reservada continue
console.warn("continue")

for (let index = 0; index <5; index++) {
    if(index==1){
        continue
    }
    console.log(index)
    
}

//operadores bolean
const entrarAlBar=(edad,pago)=>{
    if (edad>=18 && pago==true) {
        console.log("puede entrar al bar")
    }else{
        console.log("No puede entrar al bar")
    }
}
entrarAlBar(18,true)

console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)