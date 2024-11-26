// Función para agregar resultados al HTML
function agregarResultado(texto) {
    const resultadosDiv = document.getElementById('resultados');
    const p = document.createElement('p');
    p.textContent = texto;
    resultadosDiv.appendChild(p);
}
// Ejercicio 1: Calcular el área de un rectángulo
function calcularAreaRectangulo(longitud, ancho) {
    return longitud * ancho; 
}
console.log("Solución 1:");
console.log(calcularAreaRectangulo(5, 10)); 
console.log(calcularAreaRectangulo(7, 3)); 
console.log(calcularAreaRectangulo(12, 4)); 
console.log("///////////////");

// Ejercicio 2: Contar palabras en una cadena
function contarPalabras(cadena) {
    return cadena.split(' ').length;
}
console.log("Solución 2:");
console.log("Cantidad de palabras: Hola este es el PFO3 =", contarPalabras("Hola este es el PFO3")); 
console.log("Cantidad de palabras:Este es otro ejemplo =", contarPalabras("Este es otro ejemplo")); 
console.log("Cantidad de palabras:Un último ejemplo =", contarPalabras("Un último ejemplo")); 
console.log("///////////////");

// Ejercicio 3: Invertir una cadena
function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}
console.log("Solución 3:");
console.log("Cadena invertida: Hola mundo = ", invertirCadena("Hola mundo")); 
console.log("Cadena invertida: JavaScript = ", invertirCadena("JavaScript")); 
console.log("Cadena invertida: Visual Studio Code = ", invertirCadena("Visual Studio Code")); 
console.log("///////////////");

// Ejercicio 4: Encontrar el palíndromo
function esPalindromo(cadena) {
    const cadenaLimpia = cadena.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cadenaLimpia === cadenaLimpia.split('').reverse().join('');
}
console.log("Solución 4:");
console.log("Es palíndromo: Anita lava la tina = ", esPalindromo("Anita lava la tina")); 
console.log("Es palíndromo: A man a plan a canal Panama =", esPalindromo("A man a plan a canal Panama")); 
console.log("Es palíndromo: No es un palíndromo =", esPalindromo("No es un palíndromo")); 
console.log("///////////////");

// Ejercicio 5: Convertir la edad de un perro a años humanos
function edadCanina() {
    // Solicitar la edad del usuario
    const edadHumana = parseInt(prompt("Introduce la edad de tu perro :"));
    
    // Calcular la edad canina
    const edadCanina = edadHumana * 7;
    
    // Mostrar el mensaje en consola
    console.log(`Tu perro tiene ${edadCanina} años en años humanos.`);
}

// Llamar a la función
edadCanina();
console.log("///////////////");
