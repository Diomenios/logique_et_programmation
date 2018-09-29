/**
 * Fonction qui reçoit 3 cotes de 3 cours et qui renvoie la moyenne pondérée sur les ECTS de ces cours
 * Les pondérations ECTS sont anglais : 15, programmation : 25, initPC : 20
 *
 * @example
 * // returns 11.5
 * calculerMoyennePonderee(10, 12, 12);
 *
 * @param {number} coteAnglais cote d'anglais de l'étudiant
 * @param {number} coteProgrammation cote de programmation de l'étudiant
 * @param {number} coteInitPc cote d'init PC de l'étudiant
 *
 * @return {number} la moyenne des trois cotes reçues pondérée par les ECTS des cours
 *
 */
function calculerMoyennePonderee(coteAnglais, coteProgrammation, coteInitPc) {
  return (coteAnglais*15+coteProgrammation*25+coteInitPc*20)/(60);
}

/**
 * Fonction qui recoit un matricule, 3 cotes associées et qui renvoie une phrase indiquant
 * La moyenne de l'étudiant, s'il a réussi et son grade s'il en a un.
 * Précisions :
 * La moyenne est pondérée sur les ECTS de chaque cours et affichée avec 2 chiffres décimaux.
 * Un étudiant a réussi s'il a au moins 10 à chacun des cours.
 * Un étudiant recoit un grade s'il a réussi et
 * qu'il a au moins 12 (satisfaction), 14 (distinction) ou 16 (grande distinction).
 *
 * @example
 * // returns "matricule : he123, moyenne : 10.67, a réussi"
 * obtenirResultat("he123", 10, 10, 12);
 *
 * @example
 * // "matricule : he123, moyenne : 13.33, a réussi l'étudiant a satisfait"
 * obtenirResultat("he123", 10, 10, 20));
 *
 * @example
 * // returns "matricule : he123, moyenne : 14.67, a réussi l'étudiant obtient la distinction"
 * obtenirResultat("he123", 12, 12, 20);
 *
 * @example
 * // returns "matricule : he123, moyenne : 17.50, a réussi l'étudiant obtient la grande distinction"
 * obtenirResultat("he123", 10, 20, 20);
 *
 * @example
 * // returns "matricule : he123, moyenne : 17.25, n'a pas réussi"
 * obtenirResultat("he123", 9, 20, 20)
 *
 * @param {string} matricule matricule de l'étudiant
 * @param {number} coteAnglais cote d'anglais de l'étudiant
 * @param {number} coteProgrammation cote de programmation de l'étudiant
 * @param {number} coteInitPc cote d'init PC de l'étudiant
 *
 * @ return {string} la phrase indiquant la moyenne de l'étudiant, s'il a réussi et sa distinction s'il y a lieu
 *
 */
function obtenirResultat(matricule, coteAnglais, coteProgrammation, coteInitPc) {

  let moyenne = calculerMoyennePonderee(coteAnglais, coteProgrammation, coteInitPc).toFixed(2);

  if(moyenne < 10 || coteAnglais < 10	|| coteProgrammation < 10 || coteInitPc < 10){
  	return "matricule : "+matricule+", moyenne : "+moyenne+", n'a pas réussi";
  }
  else{
  	if(moyenne > 16){
  		return "matricule : "+matricule+", moyenne : "+moyenne+", a réussi, l'étudiant a obtenu la grande distinction";
  	}
  	else if(moyenne > 14){
  		return "matricule : "+matricule+", moyenne : "+moyenne+", a réussi l'étudiant obtient la distinction";
  	}
  	else if(moyenne > 12){
  		return "matricule : "+matricule+", moyenne : "+moyenne+", a réussi l'étudiant a satisfait";
  	}
  	else{
  		return "matricule : "+matricule+", moyenne : "+moyenne+", a réussi";
  	}
  }
}
