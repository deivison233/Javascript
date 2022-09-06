const texto='deivi'

let patron=RegExp(/\s/)

console.log(patron.test(texto))

const txt='python es el mejor lenguaje de programacion 2022'

const txtReplaced=txt.replace(/\d/g,'$')

console.log(txtReplaced)