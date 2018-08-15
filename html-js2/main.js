let btnPiedra = document.getElementById("btnPiedra")
let btnPapel = document.getElementById("btnPapel")
let btnTijeras = document.getElementById("btnTijeras")
let resultado = document.getElementById("resultado")

const piedra = () =>{
  // defino la eleccion del usuario
  let usuario = "piedra";
  // genero un número aleatorio entre 1 y 3
  let compu = Math.floor(Math.random() * 3) + 1;
  // Valido lo que elige la compu: 1 = piedra; 2 = papel; 3 = tijeras;
  if (compu === 1) {
    compu = "piedra";
    // metodo para mandar texto a una etiqueta de texto en HTML
    resultado.innerHTML = `La computadora elige ${compu}, es un empate`
  }else if(compu === 2){
    compu = "papel";
    resultado.innerHTML = `La computadora elige ${compu}, gana la compu`
  }else {
    compu = "tijeras";
    resultado.innerHTML = `La computadora elige ${compu}, ganaste!!`
  }
}


btnPiedra.addEventListener("click", piedra)

