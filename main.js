



//1. Introduccion a JavaScript
//b. Declaración de variables
let num1 = 5;
let num2 = 10;
let suma = num1 + num2;

//b. Imprimir el resultado en la consola
console.log(`La suma entre a (${num1}) y b (${num2}) es (${suma})`);

//c. Pedir al usuario su nombre
let nombre = prompt("Por favor, ingresa tu nombre:");

//c. Imprimir un saludo en la consola
console.log(`¡Hola, ${nombre}! Bienvenido/a.`);

//2. Operadores lógicos y condicionales
// a. Declaración de variables
let a = 8;
let b = 14;
let c;

// a. Determinar cuál es el mayor
if (a > b) {
  c = a;
  console.log(`El mayor es a (${a})`);
} else if (b > a) {
  c = b;
  console.log(`El mayor es b (${b})`);
} else {
  c = a; // o b, ya que son iguales
  console.log(`a (${a}) y b (${b}) son iguales`);
}

// b. Pedir al usuario un número
let numeroIngresado = prompt("Por favor, ingresa un número:");

// b. Convertir el valor ingresado a número
numeroIngresado = Number(numeroIngresado);

// b. Verificar si el número es par o impar
if (numeroIngresado % 2 === 0) {
  console.log(`El número ${numeroIngresado} es par`);
} else {
  console.log(`El número ${numeroIngresado} es impar`);
}

// 3. Operadores de asignación y bucles

//a. Inicializar la variable
let num10 = 10;

//a. Usar un bucle while para restar 1 en cada iteración
while (num10 >= 0) {
  console.log(`El valor de la variable es: ${num10}`);
  num10--; // Restar 1 a la variable
}

let numgrande;

do {
  // Pedir al usuario que ingrese un número
  numgrande = prompt("Por favor, ingresa un número mayor a 100:");
  // Convertir el valor ingresado a número
  numgrande = Number(numgrande);
} while (numgrande <= 100);

// Mostrar el número ingresado en la consola
console.log(`El número ingresado es: ${numgrande}`);

//4. Funciones de JavaScript

// Definir la función esPar
function esPar(numfuncion) {
  return numfuncion % 2 === 0;
}

// Probar la función con diferentes números
console.log(esPar(4));  // true
console.log(esPar(7));  // false
console.log(esPar(10)); // true
console.log(esPar(15)); // false

// Definir la función convertirCelsiusAFahrenheit
function convertirCelsiusAFahrenheit(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}

// Probar la función con diferentes valores
let celsius1 = 0;
let celsius2 = 25;
let celsius3 = 100;

console.log(`${celsius1}°C es igual a ${convertirCelsiusAFahrenheit(celsius1)}°F`);
console.log(`${celsius2}°C es igual a ${convertirCelsiusAFahrenheit(celsius2)}°F`);
console.log(`${celsius3}°C es igual a ${convertirCelsiusAFahrenheit(celsius3)}°F`);


//5. Objetos en JavaScript


// Definir el objeto persona
let persona = {
  nombre: "Ramiro",
  edad: 21,
  ciudad: "Buenos Aires",
  
  // Método para cambiar la ciudad
  cambiarCiudad: function(nuevaCiudad) {
    this.ciudad = nuevaCiudad;
  }
};

// Mostrar las propiedades iniciales en la consola
console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);

// Usar el método para actualizar la ciudad
persona.cambiarCiudad("Córdoba");

// Mostrar las propiedades actualizadas en la consola
console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);

// Definir el objeto libro
let libro = {
  titulo: "Cien Años de Soledad",
  autor: "Gabriel García Márquez",
  año: 1967,
  
  // Método para determinar si el libro tiene más de 10 años
  esAntiguo: function() {
    let añoActual = new Date().getFullYear();
    return (añoActual - this.año) > 10;
  }
};

// Verificar si el libro es antiguo o reciente y mostrar el mensaje en la consola
if (libro.esAntiguo()) {
  console.log(`El libro "${libro.titulo}" es antiguo.`);
} else {
  console.log(`El libro "${libro.titulo}" es reciente.`);
}


//6. Arrrays

// Declarar el array con los números del 1 al 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Crear un nuevo array para almacenar los resultados
let numerosMultiplicados = [];

// Usar un bucle para multiplicar cada número por 2 y almacenar el resultado en el nuevo array
for (let i = 0; i < numeros.length; i++) {
  numerosMultiplicados.push(numeros[i] * 2);
}

// Mostrar el array original y el nuevo array en la consola
console.log("Array original:", numeros);
console.log("Array multiplicado por 2:", numerosMultiplicados);

// Crear un array vacío llamado pares
let pares = [];

// Usar un bucle for que itere hasta 20
for (let i = 1; i <= 20; i++) {
  // Verificar si el número es par
  if (i % 2 === 0) {
    // Agregar el número par al array
    pares.push(i);
  }
  
  // Detener el bucle una vez que tengamos 10 números pares
  if (pares.length === 10) {
    break;
  }
}

// Imprimir el array pares en la consola
console.log("Array de números pares:", pares);

// Selecciona todos los elementos con la clase 'parrafo'
const parrafos = document.querySelectorAll(".parrafo");
const btn = document.getElementById("cambiarColorBtn");

// Agrega un evento click al botón
btn.addEventListener("click", function() {
  // Cambia el color de cada párrafo a azul
  parrafos.forEach((parrafo) => {
    parrafo.style.color = "blue";
  });
});

// Función para mostrar alerta
document.getElementById('botonAlerta').addEventListener('click', function() {
  const campoTextoAlerta = document.getElementById('campoTextoAlerta').value;
  alert(`Has ingresado: ${campoTextoAlerta}`);
});

// Función para mostrar texto de elementos de lista en consola
const items = document.querySelectorAll('#miLista li');
items.forEach(item => {
  item.addEventListener('click', function() {
      console.log(`Has hecho clic en: ${this.textContent}`);
  });
});

// Función para deshabilitar y habilitar campo de texto
document.getElementById('deshabilitarBoton').addEventListener('click', function() {
  const campoTexto = document.getElementById('campoTexto');
  campoTexto.disabled = true;
});

document.getElementById('habilitarBoton').addEventListener('click', function() {
  const campoTexto = document.getElementById('campoTexto');
  campoTexto.disabled = false;
});

document.addEventListener('DOMContentLoaded', function() {
  const formCorreo = document.getElementById('formCorreo');
  const emailInput = document.getElementById('email');
  const mostrarCorreoDiv = document.getElementById('mostrarCorreo');

  // Mostrar el correo si existe en localStorage
  function mostrarCorreo() {
      const emailGuardado = localStorage.getItem('correo');
      if (emailGuardado) {
          mostrarCorreoDiv.innerHTML = `
              <p>Correo guardado: ${emailGuardado}</p>
              <button id="eliminarCorreo">Eliminar Correo</button>
          `;
          document.getElementById('eliminarCorreo').addEventListener('click', eliminarCorreo);
      } else {
          mostrarCorreoDiv.innerHTML = '';
      }
  }

  // Guardar el correo en localStorage
  formCorreo.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = emailInput.value;
      localStorage.setItem('correo', email);
      mostrarCorreo();
      emailInput.value = '';
  });

  // Eliminar el correo de localStorage
  function eliminarCorreo() {
      localStorage.removeItem('correo');
      mostrarCorreo();
  }

  mostrarCorreo();
});
