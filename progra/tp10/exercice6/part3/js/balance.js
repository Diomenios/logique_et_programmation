"use strict";

/*****************************  variables globales ****************************/

let fruits = [
  {lib: 'poire',  prix: 4.16},
  {lib: 'ananas', prix: 2.99},
  {lib: 'dattes', prix: 6.25},
  {lib: 'orange', prix: 1.50},
  {lib: 'pomme',  prix: 1.79},
  {lib: 'banane', prix: 2.31},
  {lib: 'citron', prix: 3.70},
  {lib: 'raisin', prix: 2.49},
  {lib: 'noix',   prix: 7.80},
  {lib: 'prune',  prix: 4.52},
  {lib: 'peche',  prix: 3.99}
];
let legumes = [
  {lib: 'carotte', prix: 1.05},
  {lib: 'oignon',  prix: 0.55},
  {lib: 'ail',     prix: 1.49},
  {lib: 'celeri',  prix: 1.71},
  {lib: 'fenouil', prix: 2.11},
  {lib: 'patate',  prix: 1.32},
  {lib: 'navet',   prix: 0.93},
  {lib: 'potiron', prix: 1.14},
  {lib: 'courge',  prix: 0.98}
];

let commande = [];
let total = 0.00;

//variables nécessaire pour gérer les deux listes et pour une meilleur adaptation.
let libelle = "lib";
let switchValue = 0;

/**************************  fonctions du script  *****************************/

function getElement(id){
  return document.getElementById(id);
}

function getPriceInList(libelleName, list){
  for(let e of list){
    if(e[libelle] == libelleName){
      return e.prix;
    }
  }
  console.log("error the lib is not in list : " + list);
  return -1;
}

function getOnList(){
  switch (switchValue) {
    case 0: return fruits;
    case 1: return legumes;
    default: console.log("error with switchValue switching");
  }
}

function setTotalPrice(){
  document.getElementById("totalPrice").innerText = total;
}

function setSelect(list, refF, refP){
  refF.innerHTML = "";
  refP.innerHTML = "";
  for(let e of Object.keys(list).sort()){
    refF.innerHTML += "<option>"+ e +"</option>";
    refP.innerHTML += "<option>"+ list[e] +"</option>";
  }
}

function addToCommande(libelleName, quantity, price){
  for (let e of commande) {
    if (e[libelle] == libelleName) {
      e.quantite += quantity;
      total = parseFloat((total+(price*quantity)).toFixed(2))
      return ;
    }
  }
  commande.push({"lib": libelleName, "prix": price, "quantite": quantity});
  total = parseFloat((total+(commande[commande.length-1].prix*commande[commande.length-1].quantite)).toFixed(2));
}

function refreshTable(){
  let refTable = getElement("tbody");
  refTable.innerHTML = "";

  for(let e of commande){
    refTable.innerHTML += "<tr> <td>" + e[libelle] + "</td> <td>" + e.prix +
                        "</td> <td>" + e.quantite + "</td> <td>" + (e.quantite*e.prix).toFixed(2) + "</td> </tr>";
  }
}

function init(){
  let list = {};
  let listRef= document.getElementById("listFruits");
  let priceListRef= document.getElementById("listPrice");

  listRef.size = fruits.length;
  priceListRef.size = fruits.length;
  listRef.required = true;
  priceListRef.required = true;
  listRef.selectedIndex = -1;
  priceListRef.selectedIndex = -1;

  for(let e of fruits){
    list[e[libelle]] = e.prix;
  }

  setSelect(list, listRef, priceListRef);

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

function ajouterElement(){
  let refList = getElement("listFruits");
  let refQuantity = getElement("quantity");
  let value = refList.options[refList.selectedIndex].value;
  let price = getPriceInList(value, getOnList());

  addToCommande(value, parseFloat(refQuantity.value), price);

  refreshTable();

  refQuantity.value = "";
  setTotalPrice(total);
  return false;
}

function enleverElement(){
  let refList = getElement("listFruits");
  let elem = refList.options[refList.selectedIndex].value;

  for(let e in commande){
    if (commande[e][libelle] == elem) {
      total = (total - (commande[e].prix*commande[e].quantite)).toFixed(2);
      commande.splice(e, 1);
      refreshTable();
      setTotalPrice();
      return;
    }
  }
}

function switchList(switchNumber){
  switchValue = switchNumber;

  let newList = getOnList();
  let list = {};
  let listRef= document.getElementById("listFruits");
  let priceListRef= document.getElementById("listPrice");

  console.log(newList);
  console.log(legumes);

  listRef.size = newList.length;
  priceListRef.size = newList.length;
  listRef.selectedIndex = -1;
  priceListRef.selectedIndex = -1;

  for(let e of newList){
    list[e[libelle]] = e.prix;
  }

  setSelect(list, listRef, priceListRef);
}

function impression(){
  if (commande.length == 0) {
    return;
  }
  else{
    document.getElementById("barcode").innerHTML = DrawHTMLBarcode_Code39("12345678", 1, "yes", "in", 0, 1, 1, 1, "bottom", "center", "", "black", "white");
    window.print();
  }
}
