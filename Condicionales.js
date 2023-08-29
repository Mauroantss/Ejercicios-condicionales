// // Numero mayor o menor
// console.log("--------------Numero Mayor o Menor-------------")

// const primerNumero = parseFloat(prompt("Ingresa el primer número mayor o menor:"))
// const segundoNumero = parseFloat(prompt("Ingresa el segundo número mayor o menor:"))

// if (isNaN(primerNumero) || isNaN(segundoNumero)) {
//   console.log("Por favor, ingresa valores numéricos válidos.")
// } else {
//   if (primerNumero > segundoNumero) {
//     console.log("El primer número es mayor que el segundo.")
//   } else if (primerNumero < segundoNumero) {
//     console.log("El primer número es menor que el segundo.")
//   } else {
//     console.log("Los números son iguales.")
//   }
// }

// // Numero Igual o Diferente
// console.log("---------Numero Igual o Diferente-----------")

// const numeroUno = parseFloat(prompt("Ingresa el primer número igual o diferente:"))
// const numeroDos = parseFloat(prompt("Ingresa el segundo número igual o diferente:"))

// if (isNaN(numeroUno) || isNaN(numeroDos)) {
//   console.log("Por favor, ingresa valores numéricos válidos.")
// } else {
//   const sonIguales = numeroUno.toFixed() === numeroDos.toFixed()
  
//   if (sonIguales) {
//     console.log("Los números son iguales.")
//   } else {
//     console.log("Los números son diferentes.")
//   }
// }

// // Numero Mas grande o Igual
// console.log("---------Numero Mas grande o Igual-----------")

// const uno = parseFloat(prompt("Ingresa el primer número mas grande o igual:"))
// const dos = parseFloat(prompt("Ingresa el segundo número mas grande o igual:"))

// if (isNaN(uno) || isNaN(dos)) {
//   console.log("Por favor, ingresa valores numéricos válidos.")
// } else {
//   if (uno > dos) {
//     console.log("El primer número es más grande que el segundo.")
//   } else if (uno < dos) {
//     console.log("El segundo número es más grande que el primero.")
//   } else {
//     console.log("Los números son iguales.")
//   }
// }

// // Numero Mas Pequeño
// console.log("---------Cual es mas pequeño-----------")

// const pNumero = parseFloat(prompt("Ingresa el primer número cual es mas pequeño:"))
// const sNumero = parseFloat(prompt("Ingresa el segundo número cual es mas pequeño:"))
// const tNumero = parseFloat(prompt("Ingresa el tercer número cual es mas pequeño:"))

// if (isNaN(pNumero) || isNaN(sNumero) || isNaN(tNumero)) {
//   alert("Por favor, ingresa valores numéricos válidos.")
// } else {
//   if (pNumero <= sNumero && pNumero <= tNumero) {
//     alert("El primer número es el más chico.")
//   } else if (segundoNumero <= pNumero && sNumero <= tNumero) {
//     alert("El segundo número es el más chico.")
//   } else {
//     alert("El tercer número es el más chico.")
//   }
// }

// // Dos personas
// console.log("---------Dos personas-----------")

// const persona1 = {
//     nombre: prompt("Ingresa el nombre de la primera persona:"),
//     edad: parseInt(prompt("Ingresa la edad de la primera persona:")),
//     altura: parseFloat(prompt("Ingresa la altura de la primera persona (en cm):"))
//   };
  
//   const persona2 = {
//     nombre: prompt("Ingresa el nombre de la segunda persona:"),
//     edad: parseInt(prompt("Ingresa la edad de la segunda persona:")),
//     altura: parseFloat(prompt("Ingresa la altura de la segunda persona (en cm):"))
//   };
  
//   if (isNaN(persona1.edad) || isNaN(persona1.altura) ||
//       isNaN(persona2.edad) || isNaN(persona2.altura)) {
//     alert("Por favor, ingresa valores numéricos válidos.")
//   } else {
//     if (persona1.altura > persona2.altura) {
//         alert(`${persona1.nombre} es la persona de mayor altura.`)
//       } else if (persona1.altura < persona2.altura) {
//         alert(`${persona2.nombre} es la persona de mayor altura.`)
//       } else {
//         alert("Ambas personas tienen la misma altura.")
//       }
//     }
  
//     if (persona1.edad > persona2.edad) {
//       alert(`${persona1.nombre} es la persona de mayor edad.`)
//     } else if (persona1.edad < persona2.edad) {
//       alert(`${persona2.nombre} es la persona de mayor edad.`)
//     } else {
//       alert("Ambas personas tienen la misma edad.")
//     }
  
  

//   // Licencia de conducir
// console.log("---------Licencia de conducir-----------")

// const nombre = prompt("Ingresa tu nombre:");
// const edad = parseInt(prompt("Ingresa tu edad:"));
// const altura = parseFloat(prompt("Ingresa tu altura (en cm):"));
// const vision = parseFloat(prompt("Ingresa tu visión (de 1 a 10):"))

// if (isNaN(edad) || isNaN(altura) || isNaN(vision)) {
//   alert("Por favor, ingresa valores numéricos válidos.")
// } else {
//   if (edad >= 18 && altura > 150 && vision >= 8) {
//     alert(`${nombre}, estás capacitado para conducir.`)
//   } else {
//     alert(`${nombre}, no estás capacitado para conducir según los criterios.`)
//   }
// }

//   // Vip o no
//   console.log("---------Vip o no-----------")

// const nombreCliente = prompt("Ingresa tu nombre:");
// const pase = prompt("Ingresa el tipo de pase (vip o normal):");
// const tieneEntrada = prompt("¿Tienes entrada? (si o no):");

// if (nombreCliente === "Mauricio" || pase === "vip") {
//   alert("¡Bienvenido al evento!");
// } else if (tieneEntrada === "si") {
//   const usarEntrada = prompt("¿Deseas utilizar tu entrada? (si o no):");
//   if (usarEntrada === "si") {
//     alert("¡Bienvenido al evento!");
//   } else {
//     const comprarBoleto = prompt("¿Deseas comprar un boleto? (si o no):");
//     if (comprarBoleto === "si") {
//       const dineroDisponible = parseFloat(prompt("Ingresa el dinero disponible:"));
//       if (!isNaN(dineroDisponible)) {
//         if (dineroDisponible >= 1000) {
//           alert("¡Venta exitosa y bienvenido al evento!");
//         } else {
//           alert("Lo siento, no tienes suficiente dinero para comprar un boleto.");
//         }
//       } else {
//         alert("Por favor, ingresa un valor numérico válido.");
//       }
//     } else {
//       alert("¡Gracias y hasta luego!");
//     }
//   }
// } else {
//   const comprarBoleto = prompt("¿Deseas comprar un boleto? (si o no):");
//   if (comprarBoleto === "si") {
//     const dineroDisponible = parseFloat(prompt("Ingresa el dinero disponible:"));
//     if (!isNaN(dineroDisponible)) {
//       if (dineroDisponible >= 1000) {
//         alert("¡Venta exitosa y bienvenido al evento!");
//       } else {
//         alert("Lo siento, no tienes suficiente dinero para comprar un boleto.");
//       }
//     } else {
//       alert("Por favor, ingresa un valor numérico válido.");
//     }
//   } else {
//     alert("¡Gracias y hasta luego!");
//   }
// }


// Numero incognito
console.log("------Numero ingognito--------")

const numeroIncognita = parseInt((Math.random() * 10) + 1);
let intentos = 3;

while (intentos > 0) {
  const numeroIngresado = parseInt(prompt("Intento #" + (4 - intentos) + ": Ingresa un número del 1 al 10:"));

  if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 10) {
    alert("Por favor, ingresa un número válido entre 1 y 10.");
  } else if (numeroIngresado === numeroIncognita) {
    alert("¡Ganaste, has adivinado el número!");
    break;
  } else if (numeroIngresado < numeroIncognita) {
    alert("El número ingresado es menor, vuelve a intentarlo.");
  } else if (numeroIngresado > numeroIncognita) {
    alert("El número ingresado es mayor, vuelve a intentarlo.");
  }

  intentos--;
}

if (intentos === 0) {
  alert(`Lo siento, no adivinaste el número. El número era ${numeroIncognita}.`);
}
