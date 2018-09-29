let coursAnglaisEcts = 15;
let coursProgrammationEcts = 25;
let coursInitPcEcts = 20;
let matriculeEtudiant;
let coteAnglais;
let coteProgrammation;
let coteInitPc;

matriculeEtudiant = prompt("veuillez inroduire votre matricule étudiant :");
coteAnglais = prompt("veuillez introduire votre note pour le cour d'anglais :");
coteProgrammation = prompt("veuillez introduire votre note pour le cour de programmation :");
coteInitPc = prompt("veuillez introduire votre note pour le cour d'init PC :");

let moyenne = (coteAnglais*coursAnglaisEcts+coteProgrammation*coursProgrammationEcts+coteInitPc*coursInitPcEcts)
              /(coursAnglaisEcts+coursInitPcEcts+coursProgrammationEcts);

console.log("L'étudiant possédant le matricule " + matriculeEtudiant
            + " à obtenu une moyenne de : " + moyenne.toFixed(2) +"/20.00");
