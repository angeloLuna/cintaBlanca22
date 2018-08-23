// let alumno = {
//   nombre: "angelo",
//   edad: 28,
//   email: "angelo@jelpmi.mx",
//   direccion: {
//     calle: "agustin melgar",
//     cp: "06140",
//     exterior: "44"
//   },
//   batch: [4, 8, 9, 10]
// }
// console.log(alumno.direccion.calle)

// console.log(check.checked)

// let personaje = {
//     "name": "Luke Skywalker", 
//     "height": "172", 
//     "mass": "77", 
//     "hair_color": "blond", 
//     "skin_color": "fair", 
//     "eye_color": "blue", 
//     "birth_year": "19BBY", 
//     "gender": "male", 
//     "homeworld": "https://swapi.co/api/planets/1/", 
//     "films": [
//         "https://swapi.co/api/films/2/", 
//         "https://swapi.co/api/films/6/", 
//         "https://swapi.co/api/films/3/", 
//         "https://swapi.co/api/films/1/", 
//         "https://swapi.co/api/films/7/"
//     ], 
//     "species": [
//         "https://swapi.co/api/species/1/"
//     ], 
//     "vehicles": [
//         "https://swapi.co/api/vehicles/14/", 
//         "https://swapi.co/api/vehicles/30/"
//     ], 
//     "starships": [
//         "https://swapi.co/api/starships/12/", 
//         "https://swapi.co/api/starships/22/"
//     ], 
//     "created": "2014-12-09T13:50:51.644000Z", 
//     "edited": "2014-12-20T21:17:56.891000Z", 
//     "url": "https://swapi.co/api/people/1/"
// }

// console.log(personaje.films[0])



let nombre = document.getElementById('nombre')
let edad = document.getElementById('edad')
let email = document.getElementById('email')
let pinia = document.getElementById('pinia')
let btn = document.getElementById('btnSubmit')

let dName = document.getElementById("displayName")
let dAge = document.getElementById("displayAge")
let dEmail = document.getElementById("displayEmail")
let dPinia = document.getElementById("displayPinia")
let obj = {}



const llenar = () =>{
  obj = {
    nombre: nombre.value,
    edad: edad.value,
    email: email.value,
    pinia: pinia.value
  }

  dName.innerHTML = obj.nombre;
  dAge.innerHTML = obj.edad;
  dEmail.innerHTML = obj.email;
  dPinia.innerHTML = obj.pinia



  console.log(obj)
}


btn.addEventListener("click", llenar)

















