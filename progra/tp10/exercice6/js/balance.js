"use strict";

/*****************************  variables globales ****************************/

let fruits = [
// tableau d'objets
  {fruit: 'poire',  prix: 4.16},
  {fruit: 'ananas', prix: 2.99},
  {fruit: 'dattes', prix: 6.25},
  {fruit: 'orange', prix: 1.50},
  {fruit: 'pomme',  prix: 1.79},
  {fruit: 'banane', prix: 2.31},
  {fruit: 'citron', prix: 3.70},
  {fruit: 'raisin', prix: 2.49},
  {fruit: 'noix',   prix: 7.80},
  {fruit: 'prune',  prix: 4.52},
  {fruit: 'peche',  prix: 3.99}
];

let commande = [];
let total = 0.00;

/**************************  fonctions du script  *****************************/

function getElement(id){
  return document.getElementById(id);
}

function getPriceInFruits(fruit){
  for(let e of fruits){
    if(e.fruit == fruit){
      return e.prix;
    }
  }
  console.log("error fruit is not in fruits");
  return -1;
}

function setTotalPrice(){
  document.getElementById("totalPrice").innerText = total;
}

function setSelect(fruitliste, refF, refP){
  for(let e of Object.keys(fruitliste).sort()){
    refF.innerHTML += "<option>"+ e +"</option>";
    refP.innerHTML += "<option>"+ fruitliste[e] +"</option>";
  }
}

function addToCommande(fruit, quantity, price){
  for (let e of commande) {
    if (e.fruit == fruit) {
      e.quantite += quantity;
      total = parseFloat((total+(price*quantity)).toFixed(2))
      return ;
    }
  }
  commande.push({"fruit": fruit, "prix": price, "quantite": quantity});
  total = parseFloat((total+(commande[commande.length-1].prix*commande[commande.length-1].quantite)).toFixed(2));
}

function refreshTable(){
  let refTable = getElement("tbody");
  refTable.innerHTML = "";

  for(let e of commande){
    refTable.innerHTML += "<tr> <td>" + e.fruit + "</td> <td>" + e.prix +
                        "</td> <td>" + e.quantite + "</td> <td>" + (e.quantite*e.prix).toFixed(2) + "</td> </tr>";
  }
}

function init(){
  let fruitliste = {};
  let fruitListRef= document.getElementById("listFruits");
  let priceListRef= document.getElementById("listPrice");

  fruitListRef.size = fruits.length;
  priceListRef.size = fruits.length;
  fruitListRef.required = true;
  priceListRef.required = true;
  fruitListRef.selectedIndex = -1;
  priceListRef.selectedIndex = -1;

  for(let e of fruits){
    fruitliste[e.fruit] = e.prix;
  }

  setSelect(fruitliste, fruitListRef, priceListRef);

  setTotalPrice();
}

function checkSelect(reference, checkedValue) {
  reference.selectedIndex = checkedValue;
}

function synchroSelect(selectRef){
  switch (selectRef.name) {
    case "inputFruits": checkSelect(getElement("listPrice"), selectRef.selectedIndex);
                        break;
    case "inputPrice":  checkSelect(getElement("listFruits"), selectRef.selectedIndex);
                        break;
    default: console.log("error de value of synchroSelect wasn't good");
  }
}

function ajouterFruit(){
  let refList = getElement("listFruits");
  let refQuantity = getElement("quantity");
  let fruitValue = refList.options[refList.selectedIndex].value;
  let price = getPriceInFruits(fruitValue);

  addToCommande(fruitValue, parseFloat(refQuantity.value), price);

  refreshTable();

  refQuantity.value = "";
  setTotalPrice(total);
  return false;
}

function enleverFruit(){
  let refList = getElement("listFruits");
  let fruit = refList.options[refList.selectedIndex].value;

  for(let e in commande){
    if (commande[e].fruit == fruit) {
      console.log("trouvé");
      console.log(e);
      total = (total - (commande[e].prix*commande[e].quantite)).toFixed(2);
      commande.splice(e, 1);
      console.log(commande);
      refreshTable();
      setTotalPrice();
      return;
    }
  }
}
