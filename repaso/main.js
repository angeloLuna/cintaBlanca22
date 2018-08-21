// booleano
// let bandera = true;

// for (let i = 0; i < 10; i ++){
//   if (bandera === true) {
//     console.log("mayuscula")
//     bandera = false
//   }else{
//     console.log("minuscula")
//     bandera = true
//   }
// }


// const saludo = (palabra)=>{
//   // Version ECMA6
//   // let resultado = `${palabra} a todos`;
//   // version ECMA5
//   // let resultado2 = palabra + " a todos";
//   // console.log(resultado)
//   // console.log(resultado2)
// }

// saludo("hey")

// let arreglo = ["altura", "latitud", "longitud", 2, 5,3,7, "XD"];

// const coordenadas =(arr)=>{
//   let posicion = [];
//   posicion[0] = arr[1];
//   posicion[1] = arr[2];
//   return posicion
// }

// const diaNoche = (arr, hr) => {
//   if ("alguna evaluación loca") {
//     return "la imagen satelital segun la hora"
//   }
// }

// // let coor = cordenadas(arreglo)
// diaNoche( coordenadas(arreglo) , "5:00 pm")

// ---------------------------------

// // ECMA5
// function b(){
//   return "hola" + " todos"
// }
// // ECMA&
// const a = () => "hola" + " todos"

// console.log( a() )
// console.log( b() )

// -----------------------------

// Contador
// let userWins = 0;
// let cpuWins = 0;

// let btn = document.getElementById('btn')
// let marcadorUser = document.getElementById('user');
// let marcadorCpu = document.getElementById("cpu")
// let test = true

// const contador = () =>{
//   if(test === true){
//     userWins += 1
//     marcadorUser.innerHTML = userWins;
//   }else{
//     cpuWins +=1
//     marcadorCpu.innerHTML = cpuWins;
//   }
// }
// btn.addEventListener("click", contador)

// -------------------------------
// Métodos básicos de arreglos

// let frutas = ["naranja", "manzana", "uva"];

// // frutas[3] = "perita";
// frutas.push("perita");

// // console.log(frutas)

// // frutas.splice(2,1)

// let extracto = frutas.slice(0,1)

// console.log(frutas)
// console.log(extracto)

let nombre = document.getElementById("nombre")
let btn = document.getElementById("btn");
let texto = document.getElementById("display")
let texto2 = document.getElementById("display1")



btn.addEventListener("click", ()=>{
  if (texto2.style.display === "none") {
    texto2.style.display = "flex"  
    texto2.style.color = "blue"
  }else{
    texto2.style.display = "none"
  }
  // texto.innerHTML = nombre.value
})





















