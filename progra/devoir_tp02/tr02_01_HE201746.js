const COURS_ANGLAIS_ECTS = 15;
const COURS_PROGRA_ECTS = 25;
const COURS_INITPC_ECTS = 20;

let matriculeEtudiant;
let aReussi; // boolean
let grade;
let coteAnglais;
let coteProgrammation;
let coteInitPc;
  
matriculeEtudiant = prompt("veuillez inroduire votre matricule étudiant :");
coteAnglais = prompt("veuillez introduire votre note pour le cour d'anglais :");
coteProgrammation = prompt("veuillez introduire votre note pour le cour de programmation :");
coteInitPc = prompt("veuillez introduire votre note pour le cour d'init PC :");

let moyenne = (coteAnglais*COURS_ANGLAIS_ECTS+coteProgrammation*COURS_PROGRA_ECTS+coteInitPc*COURS_INITPC_ECTS)
              /(COURS_ANGLAIS_ECTS+COURS_INITPC_ECTS+COURS_PROGRA_ECTS);
			  
if(moyenne < 10 || coteAnglais < 10	|| coteProgrammation < 10 || coteInitPc < 10){
	console.log("Désolé mais vous avez raté !! Votre moyenne est : " + moyenne.toFixed(2) +"/20.00.");
}
else{
	if(moyenne > 16){
		grade = "grande distinction.";
	}
	else if(moyenne > 14){
		grade = "distinction.";
	}
	else if(moyenne > 12){
		grade = "satisfaction.";
	}
	else{
		grade = "";
	}
}

if(grade){
	console.log("L'étudiant possédant le matricule " + matriculeEtudiant
            + " à obtenu une moyenne de : " + moyenne.toFixed(2) +"/20.00.  Il a donc réussi son année avec une " + grade);
}
else{
	console.log("L'étudiant possédant le matricule " + matriculeEtudiant
            + " à obtenu une moyenne de : " + moyenne.toFixed(2) +"/20.00.  Il a donc réussi son année");
}
