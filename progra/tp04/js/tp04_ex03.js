/**************************  exercice 3.1a ************************************/

"use strict";

function scoreMax(array){

  if (array.length == 0) {
    return;
  }
  else {
    let max = -Infinity;

    for ( let i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }

    console.log("le score maximum est de : " + max);
  }
}

/**************************  exercice 3.1b ************************************/

function scoreMoyenEtComptage(array) {
  if (array.length == 0) {
    return;
  }
  else {
    let totalMoyenne = 0;
    let compteur = 0;

    for ( let i = 0; i < array.length; i++){
      totalMoyenne += array[i];
      if (array[i] < 7777) {
        compteur++;
      }
    }

    console.log("le score moyen est de : " + (totalMoyenne/array.length));
    console.log("le total de nombre plus petit que 7777 est de : " + compteur);
  }
}

/*************************  exercice 3.1c *************************************/

function obtenirScoresSuperieurs(scores, scoreLimite){
  let scoreReturn = [];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= scoreLimite) {
      scoreReturn.push(scores[i]);
    }
  }

  return scoreReturn;
}

/************************  exercice 3.2  **************************************/

function conversionVersString(tableau){
  let returnString = "";

  for (let i = 0; i < tableau.length-1; i++) {
    returnString += tableau[i] + ", ";
  }
  if (tableau.length) {
    returnString += tableau[tableau.length - 1];
  }

  return returnString;
}

/************************  exercice 3.3  **************************************/

//fonction permettant de run la partie "Playlist" de l'exercice

/**
 * Recoit un array de strings en parametre, remplace tous les éléments "license to kill" par "babar",
 * puis affiche l'array en console.
 *
 * @param {string[]} playlist - tableau de noms représentants le titre des morceaux de la playlist
 */
function runOfPlaylist(){
  function afficherPlaylistSaine(playlist) {
      for (let i = 0; i < playlist.length; i++) {
        if (playlist[i] === "license to kill") {
          playlist[i] = "babar";
        }
      }
      console.log(playlist);
  }

  let playlist = ["danse des canards", "albator", "license to kill", "grey's anatomy",
                  "petit poney", "license to kill", "petit ours brun"];
  afficherPlaylistSaine(playlist);
}

//fonction permettant de run la partie "pays" de l'exercice

function runOfPays(){
  const codesPays = ["BE", "Belgique", "FR", "France", "CH", "Suisse"];
  let codes = [];
  let pays = [];
  for (let i = 0; i < codesPays.length; i++) {
    if (i%2 == 0) {
    }
    codes.push(codesPays[i]);
    else{
      pays.push(codesPays[i]);
    }
  }
  console.log(codes);
  console.log(pays);
}

//fonction permettant de run la partie "EPHEC" de l'exercice

/**
 * Remplace le dernier caractère d'une chaine par un autre caractère.
 *
 * @param {string} texte - texte dont on doit changer le dernier caractère
 * @param {string} car - caractère qui doit remplacer le dernier caractre du texte
 * @return {string} chaine correspondant au texte dont on a modifié le dernier caractère
 */
function runOfEPHEC(){
  function changerDernierCaractere(texte, car) {
      let returnString = "";
      for (let i = 0; i < texte.length-1; i++) {
        returnString += texte[i];
      }
      if (texte.length > 0) {
        returnString += car;
      }
      return returnString;
  }
  let ecole = "EPHES";
  ecole = changerDernierCaractere(ecole, "C");
  console.log(ecole);
}
