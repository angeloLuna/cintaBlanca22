// for (let i = 0; i <= 100; i++){

//   if (i %3 == 0 && i % 5 == 0) {
//     console.log(`fizzbuzz ${i}`)
//   }else if (i % 5 == 0) {
//     console.log(`buzz ${i}`)
//   }else if (i %3 == 0){
//     console.log(`fizz ${i}`)
//   }else{
//     console.log(i)
//   }
// }

// preguntar informacion y meterla en un arreglo;
// let arreglo = []

// arreglo[0] = prompt("nombre")
// arreglo[1] = prompt("edad")
// arreglo[2] = prompt("email")

// let nombre = prompt("nombre");
// let edad = prompt("edad");
// let email = prompt("email");

// let arreglo = [nombre, edad, email];

// let nombre = prompt("nombre");
// let edad = prompt("edad");
// let email = prompt("email");

// arreglo[0] = nombre;
// arreglo[1] = edad;
// arreglo[2] = email;
// mostrar cada uno de los elementos con un for

// for (let i = 0; i < 3; i++){

//   console.log( arreglo[i] )

// }


// --------------------------

let texto = prompt("texto");
let resultado = ""
for(let i = 0; i < texto.length; i ++){
  if (i % 2 == 0) {
    resultado = resultado + texto[i].toUpperCase()
  }else{
   resultado = resultado + texto[i].toLowerCase()
  }
}

console.log(resultado)




















