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

/**
 * Fonction qui reçoit normalement un array en paramètre, qui suppriment ses trois derniers éléments
 * et qui retourne ce tableau.
 * Le tableau original reçu en paramètre peut être modifié.
 * Si le paramètre reçu n'est pas un array, la fonction ne fait rien et retourne simplement le paramètre reçu.
 * Si l'array reçu comporte moins de 3 éléments, la fonction enlève tous les éléments de l'array.
 *
 * @example
 * // returns ['a']
 * supprimerTroisDerniers(['a', [2, 4, 5], true, 1]);
 *
 * @example
 * // returns []
 * supprimerTroisDerniers(['a', 1]);
 *
 * @example
 * // returns 'a'
 * supprimerTroisDerniers('a');
 *
 * @param {*} tableau - array dont on désire supprimer les trois derniers éléments, quels que soient leur types
 *
 * @return {*} array reçu en paramètre sans ses trois derniers éléments.
 *             Si l'array reçu en paramètre comporte moins de 3 éléments, il s'agit d'un tableau vide.
 *             Si le paramètre n'est pas un array, il s'agit simplement du paramètre reçu non modifié.
 */
function supprimerTroisDerniersJsDoc(tableau) {
    if(tableau.constructor !== Array){
		
	}
	else if(tableau.length < 3){
		
	}
	else{
		
	}
}


