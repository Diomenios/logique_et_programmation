
//exercice TR03.01a

/**
* Demande a l'utilisateur d'introduire son matricule, ainsi qu'un nombre indefinis
* de cotes.  Affiches en console le matricule ainsi que la moyenne des cotes
* rentrees.
*
* @param aucun
*
* @return undefined
*/
function calculerMoyenneCotes(){
  //initiation des differentes variables de la fonction
  let total = 0;
  let nombreCotes = 0;
  let retour;
  let matricule = "";
  let message;

  //boucle permettant de verifier que le matricule rentre est non-vide
  while(matricule == ""){
    matricule = prompt("veuillez introduire votre matricule étudiant : ");
  }

  while(true){
    //mise a 'null' du retour
    retour = "";
    message = "Veuillez introduire une côte /20 (pour finir d'introduire des côtes veuillez écrire 99)";
    //boucle permettant de saisir une cote correcte
    while(retour == "" || isNaN(Number(retour)) || Number(retour) < 0 || Number(retour) > 20){
  		retour = prompt(message);
      //permet de modifier le message en cas d'entree incorrecte
      if(retour == "" || isNaN(Number(retour)) || Number(retour) < 0 || Number(retour) > 20){
        message = "veuillez rentrer une cote valide entre 0 et 20 !"
      }
      //condition de fin de boucle
      if (Number(retour) == 99) {
        break;
      }
    }
    //condition de fin de boucle
    if (Number(retour) == 99) {
      break;
    }
    //incrementation des compteurs et du total des cotes
    total += Number(retour);
    nombreCotes++;
  }
  console.log(matricule + " " + (total/nombreCotes).toFixed(2));
}

/* J'ai ici utilisé une boucle While car ça me semblait beaucoup logique :
*  dans ce programme, il faut boucler infiniment jusqu'à ce que l'utilisateur décide
*  de lui-même sortir de la boucle.  D'où le while(true).
*  C'est techniquement possible de le faire avec une boucle for, mais ça devient
*  directement plus dur à implémenter et ça compliquerait la lecture du code.
*/

//exercice TR03.01b

/**
* Demandes a l'utilisateur de rentrer son matricule, ainsi que 3 cotes valides.
* Affiches en console le matricule de l'utilisateur, un espace et ensuite sa moyenne
*
* @param aucuns
*
* @return undefined
*/
function calculerMoyenneTroisCotes(){
  let total = 0;
  let retour;
  const nombreCotes = 3;
  let message;
  let matricule =  "";

  while(matricule == ""){
    matricule = prompt("veuillez introduire votre matricule étudiant : ");
  }

  for (let i = 0; i < 3; i++) {
    retour = "";
    message = "Veuillez introduire une côte /20 (pour finir d'introduire des côtes veuillez écrire 99)";
    while(retour == "" || isNaN(Number(retour)) || Number(retour) < 0 || Number(retour) > 20){
  		retour = prompt(message);
      if(retour == "" || isNaN(Number(retour)) || Number(retour) < 0 || Number(retour) > 20){
        message = "veuillez rentrer une cote valide entre 0 et 20 !"
      }
    }
    total += Number(retour);
  }

  console.log(matricule + " " + (total/nombreCotes).toFixed(2));
}

/* Naturellement, pour cet exercice j'utilise plutôt une boucle for, car le nombre
*  de fois où l'on devra exécuter la boucle est connu, à l'inverse de l'exercice a
*/
