"use strict";

//Louis Arys
//Le 04/11/2018

const DUREE_MAX = 50;
const MEMORY_LOCATION = "";

let taches = [];
let compteur = 101;

function afficherMessage(message){
    document.getElementById("tachesAffichage").innerHTML += "<p>" + message + "</p>";
}

function ajouterTache(formulaire){
    taches.push(["T"+ compteur++, formulaire.nom.value, formulaire.limite.value, formulaire.importance.value,
                Number(formulaire.duree.value), formulaire.description.value, true]);
    afficherMessage("La tâche "+ taches[taches.length-1][1]
        + " a bien été ajoutée avec le code "+ taches[taches.length-1][0] + ".");
    return false;
}

function annulerDerniereTache(){
    if (taches.length === 0) {
        afficherMessage("Il n'y a aucune tâche pour le moment");
    }
    else {
        let retour = taches.pop();
        afficherMessage("La tâche " + retour[1] + " avec le code " + retour[0] + " a bien été supprimée.");
    }
}

function afficherTacheUrgente(){
    if(taches.length === 0){
        afficherMessage("Il n'y a aucune tâche pour le moment");
    }
    else {
        let tacheUrgente = taches[0];
        for (let i = 1; i < taches.length; i++) {
            if (taches[i][6] && taches[i][2] < tacheUrgente[2]) {
                tacheUrgente = taches[i];
            }
        }
        afficherMessage("La tâche la plus urgente est : " + tacheVersString(tacheUrgente));
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
   afficherMessage("Tâche d'importance " + importance + " :");
    for (let i = 0; i < taches.length; i++) {
        if (taches[i][3] === importance) {
            afficherMessage("Tache : " + taches[i][0] + "; " + taches[i][1] + "; " + taches[i][2]);
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
