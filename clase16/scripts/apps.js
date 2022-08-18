//sessionStorage.setItem('id',123)

//console.log(sessionStorage.getItem('id'))

const usuario={
    nombre:"Deivison Benitez Quinto",
    edad:34,
    correo:"deivison@yomail.com"
}

const jsonUsuario=JSON.stringify(usuario)

localStorage.setItem(usuario.correo,jsonUsuario)
console.log(localStorage.getItem(usuario.correo))