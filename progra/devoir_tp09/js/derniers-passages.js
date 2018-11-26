"use strict";

let passages;

function initialiserPage(){
  passages = {};
  document.getElementsByTagName("section")[1].innerHTML += "<table><thead><th><td>Nom</td>"+
  "<td>Derniers passages</td></th></thead><tbody id='passages'></tbody></table>";
}

function genererTable(){
  let rawTableData = "";

  for (let key of Object.keys(passages)) {
    rawTableData += "<tr><td>"+ key +"</td><td>" + passages[key].getDate() +
    "/"+ (passages[key].getMonth()+1) +"/"+ passages[key].getFullYear() +" à "
     + passages[key].getHours()+":"+ passages[key].getMinutes() + ":"+ passages[key].getSeconds() +"</td></tr>";
  }
  return rawTableData
}

function ajouterPassage(formulaire){
    passages[formulaire.recupVelo.value] = new Date();
    document.getElementById("passages").innerHTML = genererTableTriee();
    return false;
}

function genererTableTriee(){
  let rawTableData = "";

  // Filtre et puis trie la liste des keys de l'objet passages
  let filtre = Object.keys(passages).filter(function(a){return a.length >= 4;});
  filtre.sort();

  //idem que la fonction de base, sauf que filtre est une liste de keys triee alphanumeriquement.
  for(let key of filtre){
    rawTableData += "<tr><td>"+ key +"</td><td>" + passages[key].getDate() +
    "/"+ (passages[key].getMonth()+1) +"/"+ passages[key].getFullYear() +" à "
     + passages[key].getHours()+":"+ passages[key].getMinutes() + ":"+ passages[key].getSeconds() +"</td></tr>";
  }

  return rawTableData;
}
