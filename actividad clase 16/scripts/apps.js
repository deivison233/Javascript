let correo=document.querySelector("#correo")
let contrasena=document.querySelector("#contrasena")
let boton=document.querySelector("#enviarlogin")

boton.addEventListener("click",()=>{
    enviarDatos()})

    const enviarDatos=()=>{
        let usuario={
        correo:"",
        contraaseña:""
        }

        usuario.correo=correo.value
        usuario.contrasena=contrasena.value

        let jsonusuario=JSON.stringify(usuario)

        localStorage.setItem(correo.value,usuario);
        alert("se ha enviado a local storage");
        obtenerUsuario()

    };

    const obtenerUsuario=()=>{
        let usuario=document.querySelector("#usuario")
        let objUsuario=JSON.parse(localStorage.getItem("deivison@yopmail.com"))

        console.log(objUsuario)
    
    }