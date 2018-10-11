"use strict";

/****************************************************  Exercice 2.1  *******************************************************/

/**
 * Fonction qui calcule la somme du nombre contenu dans le matricule
 * de l'étudiant avec un certain nombre des nombres suivants,
 * ce nombre étant reçu en paramètre.
 *
 * @example
 * // returns 303, soit 100 + 101 + 102
 * sommeNombresSuivantsMatricule_HE100(2); // fonction écrite par un étudiant avec le matricule HE100
 *
 * @param {number} nombre - nombre des nombres suivants à additionner
 *                          au nombre contenu dans le matricule de l'étudiant qui écrit la fonction
 *
 * @return {number} le somme du nombre contenu dans le matricule de l'étudiant avec un certain nombre des nombres suivants
 *
 */
function sommeNombresSuivantsMatricule_HE201746(nombre) {
    let matriculeNumber = 201746;
	
	for(let i = 0 ; i < nombre ; i ++){
		matriculeNumber += matriculeNumber + i + 1;
	}
	
	return matriculeNumber;
}

/*******************************************  Exercice 2.3 *************************************************************/

function lotto(){
	let lotto = [1, 3, 6, 12, 34, 42];
	// TODO pour gagner il faut remplacer le 2ème élément par un 5
	// TODO et le dernier par 36 !
	lotto.shift();
	lotto.shift();
	lotto.unshift(5);
	lotto.unshift(1);
	lotto.pop();
	lotto.push(36);
console.log(lotto);
}

function frigo(){
	let bac = ["jup", "jup", "orv", "cant"];
	let frigo = ["orv", "chim"];
	// TODO il faudrait enlever le dernier élément de bac et le mettre à la fin de frigo !
	
	frigo.push(bac.pop());
	
	console.log(bac);
	console.log(frigo);
}

function supprimer(){
	
	function supprimerTroisDerniers(tableau) {
		// TODO cette fonction doit supprimer les 3 derniers éléments... comment faire ?
		for(let i = 0 ; i < 3 ; i++){
			tableau.pop();
		}
		return tableau;
	}

let survivors = ["1TM1", "1TM2", "1TL1", "1TL2"];
console.log( supprimerTroisDerniers(survivors) );
}



