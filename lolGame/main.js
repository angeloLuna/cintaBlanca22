const boton = document.getElementById('boton');
const respuesta = document.getElementById('resultado');

const mostrar = () =>{
  respuesta.style.display = "block";
}

boton.addEventListener("click", mostrar)