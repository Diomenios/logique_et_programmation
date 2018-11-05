"use strict";

//Louis Arys
//Le 04/11/2018

const DUREE_MAX = 50;

let taches = [
  [ "T01", "Aller en guindaille", "2018-11-20", "top", 1, "", true],
  [ "T02", "Révision cours progra", "2018-11-01", "top", 1, "notamment les boucles et tableaux", true],
  [ "T03", "Regarder des séries", "2018-11-25", "bof", 3, "plus que 4 saisons !", false],
  [ "T04", "Révision anglais", "2018-11-05", "top", 1, "", false],
  [ "T05", "Aller à la piscine", "2018-11-15", "bof", 2, "", true]
];

function afficherTaches(){
  for (let i = 0; i < taches.length; i++) {
    console.log(i + " : " + taches[i]);
  }
}

function annulerDerniereTache(){
  if (taches.length == 0) {
    console.log( "Il n'y a aucune tâche pour le moment");
  }
  else {
    let retour = taches.pop();
    console.log("La tâche " + retour[1] + " avec le code " + retour[0] + " a bien été supprimée.");
  }
}

function afficherTacheUrgente(){
  if(taches.length === 0){
    console.log( "Il n'y a aucune tâche pour le moment");
  }
  else {
    let tacheUrgente = taches[0];
    for (let i = 1; i < taches.length; i++) {
      if (taches[i][6] && taches[i][2] < tacheUrgente[2]) {
        tacheUrgente = taches[i];
      }
    }
    console.log("La tâche la plus urgente est : " + tacheVersString(tacheUrgente));
  }
}

// fonction qui reçoit un array tâche et la renvoie sous forme de string
function tacheVersString(tache) {
  let chaineTache = "La tâche " + tache[0] + " \"" + tache[1] +
                "\" à finir avant le " + tache[2] + " d'importance " + tache[3] +
                " est " + (tache[6] ? "ouverte" : "fermée") +
                " et il reste " + tache[4] + " h pour la terminer." +
                " Infos sup : " + tache[5] + ".";
  return chaineTache;
}

function afficherTachesImportance(importance){
  console.log("Tâche d'importance " + importance + " :");
  for (let i = 0; i < taches.length; i++) {
    if (taches[i][3] === importance) {
      console.log("Tache : " + taches[i][0] + "; " + taches[i][1] + "; " + taches[i][2]);
    }
  }
}

function marquerTacheResolue(){
  let retour = prompt("Veuillez introduire le code de la tâche que vous désirez supprimer : ");
  for (let i = 0; i < taches.length; i++) {
    if (taches[i][0] === retour && taches[i][6] === false) {
      console.log("La tâche " + taches[i][1] + " avec le code " + taches[i][0] + " a été fermée précédemment.");
      return;
    }
    if (taches[i][0] === retour) {
      taches[i][6] = false;
      console.log("La tâche " + taches[i][1] + " avec le code " + taches[i][0] + " a bien été fermée.");
      return;
    }
  }
  console.log("code invalide");
}

function afficherTachesOuvertesImportance(importance){
  console.log("Tâche d'importance " + importance);
  for (let i = 0; i < taches.length; i++) {
    if (taches[i][3] === importance && taches[i][6] === true) {
      console.log("Tache : " + taches[i][0] + "; " + taches[i][1] + "; " + taches[i][2]);
    }
  }
}

function afficherDureeTachesOuvertes(){
  let incr = 0;
  for(let i = 0 ; i < taches.length ; i++){
    if(taches[i][6] === true){
      incr += taches[i][4];
    }
  }
  console.log("Vous en avez encore pour " + incr.toFixed(2) + " heures de tâches à effectuer !" );
  if (incr > 50) {
    console.log("Courage !");
  }
}
