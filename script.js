usuario= prompt("Dime tu nombre")
alert("Bienvenido " + usuario)
console.log("El usuario actual es " + usuario)

// Array de frases
const frases = [
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
    "El único modo de hacer un gran trabajo es amar lo que haces.",
    "No cuentes los días, haz que los días cuenten.",
    "La mente es todo. Lo que pienses, eso serás.",
    "La felicidad es una mariposa que cuando la persigues siempre está fuera de tu alcance, pero que si te sientas silenciosamente puede posarse sobre ti.",
    "La mejor venganza es un gran éxito.",
    "No te preocupes por los fracasos, preocúpate por las oportunidades que pierdes cuando ni siquiera lo intentas.",
    "La vida es un 10% lo que me pasa y un 90% cómo reacciono a ello."
];
// Función para generar una frase aleatoria
function generarFrase() {
    // Genera un índice aleatorio dentro del rango de la longitud del array de frases
    const indice = Math.floor(Math.random() * frases.length);
    const indiceb = Math.floor(Math.random());
    console.log("la lista tiene" + frases.length);
    console.log("se calcula la frase # " + indice);
    console.log("el indice b es" + indiceb);
    console.log("el máximo que puede dar es" + 0.99*8 + "pero se conviernte en el entero redondeado hacia abajo, o sea " + Math.floor(0.99*8));
    // Obtiene la frase correspondiente al índice generado
    const fraseAleatoria = frases[0];
    // Muestra la frase en el footer
    document.getElementById("frase").innerText = fraseAleatoria;
}
// Agrega un listener al botón para ejecutar la función generarFrase cuando se haga clic
document.getElementById("btn-generar").addEventListener("click", generarFrase);