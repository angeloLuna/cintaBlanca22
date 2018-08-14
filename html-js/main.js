const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const email = document.getElementById("email");

const preguntar = () =>{
  let respuesta = prompt("Quieres cambiar la información de la tarjeta?")

  if (respuesta === "si") {
    validar(true)
  }else if(respuesta === "no"){
    validar(false)
  }else{
    alert("debes escribir 'si' o 'no' ")
    preguntar()
  }
}


const validar = (valor)=>{

  if (valor === true) {
    nombre.innerHTML = "angeloLuna";
    edad.innerHTML = 28;
    email.innerHTML = "angelo@jelpmi.mx"  
  }
}




preguntar()