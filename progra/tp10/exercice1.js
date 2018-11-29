"use strict";

/*attention si vous exécutez simplement ce code javascript certains exercices vont
 écraser les suivants ; chaque exercice a pour but d'être exécuté indépendament des
 autres en console ! */

/************************** exercice 1.03 *************************************/

var scores = [
              [4, 9, 7, 8],
              [1, 5, 6, 7],
              [10, 5, 7, 4]
             ];

function matrixLector(matrix){
  let returnString = "<table>";

  for (let line of matrix){
    returnString += "<tr>"
    for (let e of line){
      returnString += "<td>" + e + "</td>";
    }
    returnString += "</tr>";
  }
  return returnString+"</table>";
}

window.document.getElementsByTagName("body")[0].innerHTML = matrixLector(scores);

/************************** exercice 1.04 *************************************/

var acteurs = [
              { nom : "Leigh", prenom : "Chyler"},
              { nom : "Evans", prenom : "Chris"},
              { nom : "Pressly", prenom : "Jaime"},
              { nom : "Christian Olsen", prenom : "Eric"}
             ];

function actorsLector(tabular){
  let returnString = "<table>";

  for (let actor of tabular){
    returnString += "<tr>"
    for (let e of Object.keys(actor)){
      returnString += "<td>" + actor[e] + "</td>";
    }
    returnString += "</tr>";
  }
  return returnString+"</table>";
}

window.document.getElementsByTagName("body")[0].innerHTML = actorsLector(acteurs);

/************************** exercice 1.05 *************************************/

var etudiants = [ { nom : "Talu", prenom : "Jean", matricule : "HE100" },
              { nom : "Fraichi", prenom : "Sara", matricule : "HE101" },
              { nom : "Zarella", prenom : "Maude", matricule : "HE102" }
              ];

function selectOption(list){
  let returnString = "<select>";

  for (let line of list){
    returnString += "<option value="
    let stock = Object.keys(line).sort()
    for (let e in stock){
      if (e == 0) {
        returnString += "\"" + line[stock[e]] + "\">";
      }
      else {
        returnString += line[stock[e]] + " ";
      }
    }
    returnString += "</option>";
  }
  return returnString+"</select>";
}

window.document.getElementsByTagName("body")[0].innerHTML = selectOption(etudiants);
