/**
 * Entrainement #4
 */

//Récupération de l'élément DOM du formulaire
const form = document.querySelector("form");

// Tableau des ingrédients interdit
const ingredientsInterdit = ["choux", "sel", "balsamique", "huile", "échalote"]

// Appliquer un écouteur d'événement sur le formulaire du boutton (submit)
form.addEventListener("submit", (event) => {
    //annule l'action par défaut du formulaire qui est de recharger la page
    // https://develloper.mozilla.org/fr/docs/web/API/Event/preventDefault
    event.preventDefault();

    // Récupérer la valeur du champs "input" (le nom de l'ingredient)
    const ingredient = document.querySelector("#ingredient").value;         //mêtre value affiche le champs remplie de la page en console une fois valider
    console.log(ingredient);

    // Si la variable vaut null, alor on créer le paragraphe avec  /Si/
     let p = document.querySelector("p");
     p.innerText = ingredient;

     //Récupérer les Alert
     const  alertDanger = document.querySelector(".alert-danger");
     const alertSuccess = document.querySelector(".alert-success");
     
     // Ajoute la class CSS "none" à nos 2 bandeaux
     alertDanger.classList.add("none");
     alertSuccess.classList.add("none");

     //Vérifie si l'ingredient est interdit
     const interdit = ingredientsInterdit.includes(ingredient.toLowerCase());

     //si la variable "interdit est "true", alors on affiche une erreur
     if (interdit) {
         alertDanger.classList.remove("none", "fade-out");                          //si//
         
         //le code sera exécuté dans 1 seconde
         setTimeout(() => {
             alertDanger.classList.add("fade-out");
         }, 1000);
     }
     else {
         alertSuccess.classList.remove("none", "fade-out");                             //Alors//
           
         //le code sera exécuté dans 1 seconde
         setTimeout(() => {
            alertSuccess.classList.add("fade-out");
        }, 1000);
     }
   //   if (p === null) { 
        
        //Création d'un paragraphe
 //*   let p = document.createElement("p"); // je crée la balise <p></p>
 //   p.innerText = ingredient;               //<p>Sel</p>

    //Ajoute la balise HTML "p" après le formulaire                 //première vertion + longue//
 //   form.after(p);
  //  }
 //   else {                                                      
        //Si le paragraphe existe, on change son contenu avec      //Alor//
  //     p.innerText = ingredient;
    //  } 
    
    //
});