"use strict";

function sommeJusque_HE201746(n){
  let returnCounter = 0;
  for (let i = 0; i < n; i++) {
    returnCounter += i;
  }

  return returnCounter;
}

function tousMoins4_HE201746(points) {
  for (let i = 0; i < points.length; i++) {
    points[i] = points[i]-4;
  }

  return points;
}

function sommeDesPairs_HE201746(array){
  let counterReturn = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i]%2 == 0) {
      counterReturn += array[i];
    }
  }
  return counterReturn;
}

function analyserNombre_HE201746(nombre){
  let pair = 0;
  let impair = 0;
  let zero = 0;

  let stringNumber = String(nombre);

  for (let i = 0; i < stringNumber.length; i++) {
    
  }
}

//fonctions de verification pour sommeDesPairs_HE201746

/*
function sommeDesImpairs_HE201746(array){
  let counterReturn = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i]%2 != 0) {
      counterReturn += array[i];
    }
  }
  return counterReturn;
}

function sommeDes_HE201746(array){
  let counterReturn = 0;
  for (var i = 0; i < array.length; i++) {
      counterReturn += array[i];
  }
  return counterReturn;
}
*/
