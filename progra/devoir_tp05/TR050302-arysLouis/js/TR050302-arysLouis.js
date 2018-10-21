"use strict";

//Classe : 1TM2

//Groupe : Louis Arys, François Charlier,  Joseph Antoons, Alexandre Pauly, Michihilo Onizuka

/*
2 tableaux sont imposés, Tab X et Tab Y. La fonction  que vous devez créer
compare ces 2 tableaux et renvoie un 3eme tableau indiquant à chaque position :
- "==" si les 2 nombres sont égaux
- "x +" si la valeur du tableau X est supérieur à celle du tableau Y
- "y +" si la valeur du tableau Y est supérieur à celle du tableau X
- "y vide" si le tableau X possède une valeur en position (n) et que le tableau Y est vide en position (n)
- "x vide" si le tableau Y possède une valeur en position (n) et que le tableau X est vide en position (n)

ex: si Tab X = [1, 5, 18, 3]
       Tab Y = [2, 8, 3, 3, 24]
	votre programme renvoie : [x +, x +, y +, ==, x vide]
*/

function compare(tabx, taby){
	let size;
	let sizeTwo;
	let letter;
	let returnTab =  [];
	if(tabx.length <= taby.length){
		size = taby.length;
		sizeTwo = tabx.length;
		letter = 'x';
	}
	else{
		size = tabx.length;
		sizeTwo = taby.length;
		letter = 'y';
	}
	for(let i = 0 ; i < size ; i++){

		if(i > sizeTwo-1){
			returnTab.push(letter +"vide");
		continue;
		}
		if(tabx[i] > taby[i]){
			returnTab.push("x +");
			continue;
		}
		if(tabx[i] <  taby[i]){
			returnTab.push("y +");
			continue;
		}
		returnTab.push("==");
	}
	return returnTab;
}
