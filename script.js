/**
 * DOM & Events
 */
/**DOM : Document Object Model
 * NE PAS OUBLIER L' ATTRIBUT "DEFER" DANS LA BALISE SCRIPT HTML
 */

/**
 * Permet de selectionner 0 ou plusieurs éléments HTML H1
 */
let h1 = document.getElementsByTagName("h1");           //selectioner un evenement
console.log(h1);

/**
 * Permet de selectionner 0 ou plusieurs éléments HTML contenant la classe
 * CSS "container"
 */
let container = document.getElementsByClassName("container");
console.log(container);

/**
 * Permet de selectionner UN SEUL élément et le premier trouvé !!
 */
let content = document.getElementById("content");
console.log(content);

/**
 * 
 * On à modifier le text 
 */
content.innerText = "Ben c'est modifié !";
//content.style.color = "yellow";
// content.style.color = 
//content.style.backgroundColor = "green";
//modif le text
content.innerHTML = "<strong>Je suis strong</strong>";
// inerText ne permet pas traiter du HTML
//content.innerText = "<strong>Je suis strong</strong>";

//Animer un élément
content.animate([
    {transform: "rotate(360deg)"} ,
    //{ transform: "scale(1.5)"}//   // transform
],{
    duration: 90000,                 //Temps en millième de secondes
    //iterations: Infinity          //Tourne à linfini
});
/**
 *  ADD class
 * 
 *Applique une classe ou plusieur class CSS sur notre élément HTML
 /** 
  * 
 */
content.classList.add("success", "arrondi");
/**
 * Suprime une ou plusieur classe CSS sur notre HTML
 *séparées par une virgule et entre guillemets
 /**
  * 
  */
content.classList.remove("arrondi");
/**
 * Séléction d' élément
 * 
 */
/**
 * QuerySelector() sélectionera 1 seul élément et le premier trouvé
 * Pas de boucle pour lire un QuerySelector()
 */
//let element = document.querySelector("h1");
/**
 * Sélectionner un élément HTML selon sa class
 */
//let element = document.querySelector(".container");
//let element = document.querySelector(".container h1");
/**
 * Sélectionner un élément HTML selon son ID 
 */
//let element = document.querySelector("#content");

/**
 *  querySelectorALL() sélectionnera 0 ou PLUSIEURS éléments.
 */
let elements = document.querySelectorAll('.container');
elements.forEach(element => {
    element.style.backgroundColor = "yellow";
})

