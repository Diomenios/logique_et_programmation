"use strict";

/**************************  Exercice 4.01 ************************************/

/**
* retourne la somme des nombres 0 a n.
*
*@param {number} n  le nombre max a additionner.
*@return {number} returnCounter  la somme de 0 a n.
*/
function sommeJusque_HE201746(n){
  let returnCounter = 0;

  //boucle faisant la somme de 0 a n
  for (let i = 0; i <= n; i++) {
    returnCounter += i;
  }

  return returnCounter;
}

/**
* retourne la liste initiale de points passee, et diminue la valeur de chaque
* element de 4.
*
*@param {[number]} points  array de points a diminuer.
*@return {[number]}  retourne la liste initiale modifiee.
*/
function tousMoins4_HE201746(points) {

  // boucle modifiant tous les elements de n en les decrementant de 4
  for (let i = 0; i < points.length; i++) {
    points[i] = points[i]-4;
  }

  return points;
}

/**
* Parcours une array de nombres.
* Additione tous les nombres pairs et retourne la valeur du resultat.
*
*@param {[number]} array  la liste des nombres a analyser et additionner.
*@return {number} counterReturn  la somme de tous les nombres pairs contenu dans
*                                array.
*/
function sommeDesPairs_HE201746(array){
  let counterReturn = 0;

  //boucle parcourant l'array de nombres
  for (var i = 0; i < array.length; i++) {
    //condition pour que le nombre soit pair
    if (array[i]%2 == 0) {
      counterReturn += array[i];
    }
  }
  return counterReturn;
}

/**************************  Exercice 4.02 ************************************/

/**
* Convertis un number en String pour analyser tous les chiffres le composant.
* Affiches en console le nombre de chiffres pairs, impairs et nuls en console.
*
*@param {number} nombre  le nombre a analyser.
*@return {undefined}
*/
function analyserNombre_HE201746(nombre){
  //initialisation des compteurs
  let pair = 0;
  let impair = 0;
  let zero = 0;

  //convertion du number en string
  let stringNumber = String(nombre);

  //boucle parcourant le String nouvellement cree
  for (let i = 0; i < stringNumber.length; i++) {
    if (Number(stringNumber[i]) == 0) {
      //condition permettant de determiner la nullite du chiffre
      zero++;
    }
    //condition permettant de determiner si le chiffre est pair
    else if (Number(stringNumber[i])%2 == 0) {
      pair++;
    }
    //si les deux autres conditions sont fausses, le chiffre est impair
    else {
      impair++;
    }
  }

  console.log("Le nombre " + nombre + " comporte " + pair + " chiffre(s) pair(s), "
              + impair + " chiffre(s) impairs et " + zero + " zéro(s)." )
}

//fonctions de verification pour sommeDesPairs_HE201746

/*
function sommeDesImpairs_HE201746(array){
  let counterReturn = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i]%2 != 0) {
      counterReturn += array[i];
    }
  }
  return counterReturn;
}

function sommeDes_HE201746(array){
  let counterReturn = 0;
  for (var i = 0; i < array.length; i++) {
      counterReturn += array[i];
  }
  return counterReturn;
}
*/
