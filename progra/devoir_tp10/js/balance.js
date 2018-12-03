"use strict";

/*****************************  variables globales ****************************/

var fruits = [{fruit: 'poire', mode: '/kg', prix: 4.16},
              {fruit: 'ananas', mode: '/pc', prix: 2.99},
              {fruit: 'dattes', mode: '/pc', prix: 6.25},
              {fruit: 'orange', mode: '/kg', prix: 1.50},
              {fruit: 'pomme', mode: '/kg', prix: 1.79},
              {fruit: 'banane', mode: '/pc', prix: 2.31},
              {fruit: 'citron', mode: '/pc', prix: 0.70},
              {fruit: 'raisin', mode: '/pc', prix: 2.49},
              {fruit: 'noix', mode: '/kg', prix: 7.80},
              {fruit: 'prune', mode: '/kg', prix: 4.52},
              {fruit: 'peche', mode: '/kg', prix: 3.99},
              {fruit: 'coco', mode: '/pc', prix: 4.45}];

let commande = [];
let total = 0.00;

//variables nécessaire pour gérer les deux listes et pour une meilleur adaptation.
let libelle = "fruit";

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

function getModeInList(libelleName, list){
  for(let e of list){
    if(e[libelle] == libelleName){
      return e.mode;
    }
  }
  console.log("error the lib(Mode) is not in list : " + list);
  return -1;
}

function getFruitByName(libelleName){
  for(let e of fruits){
    if(e.fruit == libelleName){
      return e;
    }
  }
}

function setTotalPrice(){
  document.getElementById("totalPrice").innerText = total;
}

function setSelect(list, refF, refP, refM){
  for(let e of Object.keys(list).sort()){
    refF.innerHTML += "<option>"+ e +"</option>";
    refP.innerHTML += "<option>"+ list[e].prix +"</option>";
    refM.innerHTML += "<option>"+ list[e].mode +"</option>";
  }
}

function addToCommande(libelleName, quantity, price, mode){
  for (let e of commande) {
    if (e[libelle] == libelleName) {
      e.quantite += quantity;
      total = parseFloat((total+(price*quantity)).toFixed(2))
      return ;
    }
  }
  commande.push({"fruit": libelleName, "prix": price, "quantite": quantity, "mode": mode});
  total = parseFloat((total+(commande[commande.length-1].prix*commande[commande.length-1].quantite)).toFixed(2));
}

function refreshTable(){
  let refTable = getElement("tbody");
  refTable.innerHTML = "";

  for(let e of commande){
    refTable.innerHTML += "<tr> <td>" + e[libelle] + "</td> <td>" + e.prix +
                        "</td> <td>" + e.quantite + "</td> <td>" + e.mode + "</td> <td>" + (e.quantite*e.prix).toFixed(2) + "</td> </tr>";
  }
}

function init(){
  let list = {};
  let listRef= getElement("listFruits");
  let priceListRef= getElement("listPrice");
  let modeListRef= getElement("listMode")

  listRef.size = fruits.length;
  priceListRef.size = fruits.length;
  modeListRef.size = fruits.length;
  listRef.required = true;
  priceListRef.required = true;
  modeListRef.required = true;
  listRef.selectedIndex = -1;
  priceListRef.selectedIndex = -1;
  modeListRef.selectedIndex = -1;

  for(let e of fruits){
    list[e[libelle]] = {"prix": e.prix, "mode": e.mode};
  }

  setSelect(list, listRef, priceListRef, modeListRef);

  setTotalPrice();
}

function checkSelect(reference, checkedValue) {
  for(let e of reference){
    e.selectedIndex = checkedValue;
  }
}

function switchInputArea(reference){
  let ref = getElement("quantity");
  switch (reference.options[reference.selectedIndex].value) {
    case '/kg': ref.min="0.05";
                ref.max="10";
                ref.placeholder="de 50g à 10kg";
                ref.step="0.01";
                break;
    case '/pc': ref.min="1";
                ref.max="100";
                ref.placeholder="de 1pc à 100pc";
                ref.step="1";
                break;
    default: console.log("error during the switch of inputTextArea");
  }
}

function synchroSelect(selectRef){
  switch (selectRef.name) {
    case "inputFruits": checkSelect([getElement("listPrice"), getElement("listMode")], selectRef.selectedIndex);
                        switchInputArea(getElement("listMode"));
                        break;
    case "inputPrice":  checkSelect([getElement("listFruits"), getElement("listMode")], selectRef.selectedIndex);
                        switchInputArea(getElement("listMode"));
                        break;
    case "inputMode": checkSelect([getElement("listFruits"), getElement("listPrice")], selectRef.selectedIndex);
                      switchInputArea(getElement("listMode"));
                        break;
    default: console.log("error de value of synchroSelect wasn't good");
  }
}

function ajouterElement(){
  let refList = getElement("listFruits");
  let refQuantity = getElement("quantity");
  let value = refList.options[refList.selectedIndex].value;
  let price = getPriceInList(value, fruits);
  let mode = getModeInList(value, fruits);

  addToCommande(value, parseFloat(refQuantity.value), price, mode);

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

function impression(){
  if (commande.length == 0) {
    return;
  }
  else{
    getElement("barcode").innerHTML = DrawHTMLBarcode_Code39("60208331", 1, "yes", "in", 0, 1, 1, 1, "bottom", "center", "", "black", "white");
    window.print();
  }
}

function eraseTable(){
  getElement("tbody").innerHTML = "";
  total = 0;
  commande = [];
  setTotalPrice();
}
