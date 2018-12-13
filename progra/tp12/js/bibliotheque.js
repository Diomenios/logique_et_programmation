"use strict";

/***********************************  variables globales du script  ***************************************************/

let  catalogue = {
    '0124': {auteur: 'B. Y.', titre: 'Connectique', pret:true,
        dte: new Date(2014,9,11)},
    '0254': {auteur: 'L. Ch.', titre: 'Programmation C', pret:false},
    '0334': {auteur: 'L. Ch.', titre: 'JavaScript', pret:false},
    '0250': {auteur: 'D. A.', titre: 'Mathématiques', pret:false},
    '0604': {auteur: 'L. Ch.', titre: 'Objets', pret:false},
    '0025': {auteur: 'DV. M.', titre: 'Electricité', pret:false},
    '0099': {auteur: 'B. Y.', titre: 'Phénomènes Périodiques', pret:false},
    '0023': {auteur: 'V. M-N.', titre: 'Programmation Java', pret:false},
    '0100': {auteur: 'L. Ch.', titre: 'Bases de Données', pret:false},
    '0147': {auteur: 'VD. V.', titre: 'Traitement de Signal', pret:false},
    '0004': {auteur: 'D. Y.', titre: 'Programmation Multimedia', pret:true,
        dte: new Date(2014,10,6)},
    '0033': {auteur: 'M. C.', titre: "Systèmes d'exploitation", pret:false}
};

/*******************************  fonctions outils du script  *********************************************************/

/*
* Retourne true si l'object est en prêt, false s'il est encore disponible dans le catalogue
 */
function filterByBoolean(x){
    return catalogue[x].pret;
}

function invertFilterByBoolean(x){
    return !catalogue[x].pret;
}


/*******************************  fonctions du script  ****************************************************************/

function getRefById(name){
    return document.getElementById(name);
}

/*
 * Ajoute au corps de la table de prêt le nombre d'objets dont la liste est passée en paramètre.
 * Prérequis : la liste doit être triée de manière à seulement prendre les clés permettant d'accéder aux objets dont le
 * paramètre "pret" est à false.
 *
 * @param (Array) list la liste des clés permettant d'accéder aux objects contenu dans catalogue.
 */
function formatLeftTable(list){
    let ref = getRefById("leftTBody");
    for (let e of list){
        ref.innerHTML += "<tr> <td>" + e + "</td> <td>" + catalogue[e].auteur + "</td> <td>" + catalogue[e].titre + "</td> </tr>";
    }
}

/*
* Ajoute au corps de la table de prêt le nombre d'objets dont la liste est passée en paramètre.
* Prérequis : la liste doit être triée de manière à seulement prendre les clés permettant d'accéder aux objets dont le
* paramètre "pret" est à true.
*
* @param (Array) list la liste des clés permettant d'accéder aux objects contenu dans catalogue.
 */
function formatRightTable(list){
    let ref = getRefById("rightTBody");
    for (let e of list){
        ref.innerHTML += "<tr> <td>" + e + "</td> <td>" + catalogue[e].auteur + "</td> <td>" + catalogue[e].titre +
            "</td> <td>" + formatDateDMY(catalogue[e].dte) + "</td> </tr>";
    }
}

function formatDateDMY(dateObject){
    return dateObject.getDate() +"/" + (dateObject.getMonth()+1) + "/" + dateObject.getFullYear();
}

function createTable(){
    let list = Object.keys(catalogue);

    formatLeftTable(list.filter(invertFilterByBoolean));
    formatRightTable(list.filter(filterByBoolean));
}

function emptyTable(){
    getRefById("rightTBody").innerHTML = "";
    getRefById("leftTBody").innerHTML = "";
}

function init(){
    createTable();
}

function borrow(){
    
}

function getBack(){

}
