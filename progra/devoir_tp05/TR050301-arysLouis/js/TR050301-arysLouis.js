"use strict";

//Classe : 1TM2

//Groupe : Louis Arys, François Charlier,  Joseph Antoons, Alexandre Pauly, Michihilo Onizuka

/**
 * Fonction qui permet de savoir, à partir d'un ensemble de points [x, y],
 * la position dans le tableau de points se trouvant dans un cercle de rayon r et de centre positionné en [a, b].
 * La fonction retourne une array contenant la positions, dans le tableau initiale de points,
 * des points contenu dans le cercle (bord compris).
 *
 * @example
 * // returns [1, 2, 3]
 * cercle([0, 0], 4, [[10, 10], [2, 2], [1, 1], [3, 2], [15, 16]]);
 *
 * @param {*} centre - array contenant la position [x, y] du centre du cercle.
 * @param {*} rayon - array contenant la position [x, y] du centre du cercle.
 * @param {*} tableau - array une liste de points [x, y] à tester.
 *
 * @return {*} array contenant l'ensemble des positions (dans le tableau initial) des points contenu dans le cercle.
 */

 function cercle(centre, rayon, tableau){
 	let newtab = [];
  	for (let i = 0; i < tableau.length; i++){
 	 	if (rayon**2 < (tableau[i][0]**2) + (tableau [i][1]**2)){
 			continue;
 	 	}
      	else {
 		 	newtab.push(i);
 	 	}
 	}
 	return newtab;
 }
