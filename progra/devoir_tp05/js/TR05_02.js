"use strict";

//initialisation des variables globales
let kilometrages = [];
const CONSOMMATION = 0.06;

/*
* Vérifie si le nombre de kilométrage est suffisamment grand.
* Si oui, lance la fonction passée en paramètre.
* Si non, affiche une erreur en console.
*
* @param {function} fonction La fonction qu'on veut lancer si la condition est respectée
*/
function affichageError(fonction){
  if (kilometrages.length < 2) {
    console.log("veuillez rentrer au moins 2 valeurs de kilométrage dans le programme !");
  }
  else {
    fonction();
  }
}

/*
* Demande à l'utilisateur d'introduire un kilométrage et l'enregistre.
* Refuse un km plus petit que le précédent.
*/
function ajouterKilometrages(){
  let retour = prompt("veuillez introduire un kilométrage : ");
  if (isNaN(Number(retour)) || retour == "" ) {
    console.log("erreur, veuillez rentrer un kilométrage valide (sous forme de nombres) !");
  }
  else if (kilometrages.length > 0 && kilometrages[kilometrages.length-1] > Number(retour)) {
    console.log("erreur, votre kilométrage doit être plus grand que le dernier rentré !!"+
              "  Le dernier étant : " + kilometrages[kilometrages.length-1]);
  }
  else {
    kilometrages.push(Number(retour));
  }
}

/*
* Vide les enregistrements, demande de confirmation avec fonction confirm().
*/
function reinitialiserKilometrages(){
  if (confirm("Veuillez confirmer l'effacement des données")) {
    kilometrages = [];
  }
  else{
    console.log("effacement annulé");
  }
}

/*
* Affiche le nombre d'enregistrements de kilométrages
*/
function afficherNombreEnregistrements(){
  console.log("Votre nombre d'enregistrement est de : " + kilometrages.length);
}

/*
* Affiche le plus grand trajet effectué entre deux pleins
*/
function afficherTrajetMax(){
  let max = kilometrages[1]-kilometrages[0];
  for (let i = 1; i < kilometrages.length-1; i++) {
    let acc = kilometrages[i+1]-kilometrages[i];
    if (acc >  max) {
      max = acc;
    }
  }
  console.log("le plus grand trajet entre deux pleins est de : " + max + " km.");
}

/*
* Affiche la moyenne des trajets effectués entre deux pleins avec 2 chiffres décimaux
*/
function afficherTrajetMoyen(){
  let acc = 0;
  for (let i = 0; i < kilometrages.length-1; i++) {
    acc += kilometrages[i+1]-kilometrages[i];
  }
  console.log("Votre distance moyenne parcourue entre deux pleins est de : " +
              (acc/kilometrages.length).toFixed(2));
}

/*
* Affiche le total de litres d'essence utilisés depuis le début
* des enregistrements, en tenant compte de la consommation
*/
function afficherConsommation(){
  console.log("Votre consommation d'essence totale est de : " +
            ((kilometrages[kilometrages.length-1]-kilometrages[0])*CONSOMMATION) + "litres.")
}

/*
* Affiche le nombre de fois où un plein a été effectué alors que le kilométrage
* parcouru était plus petit que (km) passé en paramètre
*/
function afficherKilometrageInferieur(km){
  let acc = 0;
  for (let i = 0; i < kilometrages.length-1; i++) {
    if(kilometrages[i+1]-kilometrages[i]< km){
      acc++;
    }
  }
  console.log("le nombre de fois que votre kilométrage entre deux pleins a été de moins de " +
              km + " km est : " + acc);
}
