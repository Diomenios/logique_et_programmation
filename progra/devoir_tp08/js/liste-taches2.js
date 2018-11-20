"use strict";

//Louis Arys
//Le 04/11/2018

/********************  variables globales du script  **************************/

/*Ne sachant pas si seulement la derniere commande devait etre affichee dans la
*zone de texte, j'ai implemente une fonction faisant les deux
*le texte s'efface si la variable TEXTE_EFFACER == true
*le texte ne s'efface pas si la variable TEXTE_EFFACER == false
*/
const TEXTE_EFFACER = false;

const DUREE_MAX = 50;
const DUREE_COURAGE = 50;
const MEMORY_LOCATION = "";

let taches = [
  [ "T01", "Aller en guindaille", "2018-11-20", "top", 1, "", true],
  [ "T02", "Révision cours progra", "2018-11-01", "top", 1, "notamment les boucles et tableaux", true],
  [ "T03", "Regarder des séries", "2018-11-25", "bof", 3, "plus que 4 saisons !", false],
  [ "T04", "Révision anglais", "2018-11-05", "top", 1, "", false],
  [ "T05", "Aller à la piscine", "2018-11-15", "bof", 2, "", true]
];
let compteur = 101;

/****************************  fonctions du script  ***************************/

/*
* Affiche le message passé en paramètre dans la zone de texte prévue à cet effet.
*
* @param{String} message Le message à afficher.
*/
function afficherMessage(message){
    document.getElementById("tachesAffichage").innerHTML += "<p>" + message + "</p>";
}

/*
* Ajoute une tâche à la liste des tâches.  Prend pour cela les données dans les
* champs correspondant du formulaire.
*
* @param{object} formulaire La référence au formulaire.
*
* @return{boolean} / Doit retourner false.
*/
function ajouterTache(formulaire){
    taches.push(["T"+ compteur++, formulaire.nom.value, formulaire.limite.value, formulaire.importance.value,
                Number(formulaire.duree.value), formulaire.description.value, true]);
    afficherMessage("La tâche "+ taches[taches.length-1][1]
        + " a bien été ajoutée avec le code "+ taches[taches.length-1][0] + ".");
    return false;
}

/*
* Si la liste des tâches est vide, indiques à l'utilisateur qu'il n'y a plus de tâches
* à supprimer.  Si la liste contient des tâches, suprime la dernière tâche rentrée.
*
*/
function annulerDerniereTache(){
    if (taches.length === 0) {
        afficherMessage("Il n'y a aucune tâche pour le moment");
    }
    else {
        let retour = taches.pop();
        afficherMessage("La tâche " + retour[1] + " avec le code " + retour[0] + " a bien été supprimée.");
    }
}

/*
*  Affiche la tâche la plus urgente en utilisant pour cela la fonction tacheVersString.
*/
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

/*
* Récupère l'importance dans la liste déroulante "choixImportance".
* Affiche un message indiquant l'importance choisie.
* Affiche ensuite toutes les tâches dont l'importance est égale à l'importance choisie
*
*/
function afficherTachesImportance(){
    let list = document.getElementById("choixImportance");
    let importance = list.options[list.selectedIndex].value;
   afficherMessage("Tâche d'importance " + importance + " :");
    for (let i = 0; i < taches.length; i++) {
        if (taches[i][3] === importance) {
            afficherMessage("Tache : " + taches[i][0] + "; " + taches[i][1] + "; " + taches[i][2]);
        }
    }
}

/*
* Récupère le code de la tâche modifier dans le champ "codeTacheResolue".
* Si le code existe et est ouvert : affiche un message indiquant que la tâche à bien
* été fermée, puis ferme la tâche.
* Si le code existe et a déjà été fermé : affiche un message indiquant que la tâche
* est déjà fermée.
* Si le code n'existe pas : affiche le message "code invalide".
*
*/

function marquerTacheResolue(){
    let retour = document.getElementById("codeTacheResolue").value;
    for (let i = 0; i < taches.length; i++) {
        if (taches[i][0] === retour && taches[i][6] === false) {
            afficherMessage("La tâche " + taches[i][1] + " avec le code " + taches[i][0] + " a été fermée précédemment.");
            return;
        }
        if (taches[i][0] === retour) {
            taches[i][6] = false;
            afficherMessage("La tâche " + taches[i][1] + " avec le code " + taches[i][0] + " a bien été fermée.");
            return;
        }
    }
    afficherMessage("code invalide");
}

/*
* Récupère l'importance dans la liste déroulante "choixImportance".
* Affiche un message indiquant l'importance choisie.
* Affiche ensuite toutes les tâches dont l'importance est égale à
* l'importance choisie et qui sont ouvertes.
*
*/
function afficherTachesOuvertesImportance(){
    let list = document.getElementById("ouvertesChoixImportance")
    let importance = list.options[list.selectedIndex].value;
    afficherMessage("Tâche d'importance " + importance);
    for (let i = 0; i < taches.length; i++) {
        if (taches[i][3] === importance && taches[i][6] === true) {
            afficherMessage("Tache : " + taches[i][0] + "; " + taches[i][1] + "; " + taches[i][2]);
        }
    }
}

/*
* Affiche la durée totale de toutes les tâches ouvertes.
*/
function afficherDureeTachesOuvertes(){
    let incr = 0;
    for(let i = 0 ; i < taches.length ; i++){
        if(taches[i][6] === true){
            incr += taches[i][4];
        }
    }
    afficherMessage("Vous en avez encore pour " + incr.toFixed(2) + " heures de tâches à effectuer !" );
    if (incr > DUREE_COURAGE) {
        afficherMessage("Courage !");
    }
}
