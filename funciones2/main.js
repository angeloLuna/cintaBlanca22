
// const cuadrado = (num) =>{
//   let res = num * num;
//   console.log(res)
//   return res
// }


// let suma = cuadrado(5) + 10

// console.log(suma)


// const areaCuadrado = (lado)=>{
//   let area = lado * lado;
//   return area
// }

// console.log( areaCuadrado(6) );

// const areaRectangulo = (base, altura) => {
//   let area = base * altura
//   return area;
// }

// console.log(areaRectangulo(6, 3));

// -----------------------------------
// crear una función que calcule el area de un triángulo, debe recibir como parametro el tipo de triángulo y hacer el respectivo calculo.



const areaEquilatero = () =>{
  let lado = prompt("lado")
  let area = (lado * lado)*(Math.sqrt(3)/4);
  return area
}

const areaTrectangulo = (base,altura)=>{
  let area = (base*altura)/2;
  return area 
}

const calcular = () =>{
  let tipo = prompt("que tipo de triangulo es");
  if (tipo === "equilatero") {
    
    console.log(areaEquilatero())
  }else if(tipo === "rectangulo"){
    console.log(areaTrectangulo())
  }else if(tipo === "isoseles")
}





















