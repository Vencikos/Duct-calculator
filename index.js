'use strict';

const inputSelectEl = document.querySelector('.select-element');
const inputSizeA = document.querySelector('#input-size-A');
const inputSizeB = document.querySelector('#input-size-B');
const inputSizeC = document.querySelector('#input-size-C');
const inputSizeD = document.querySelector('#input-size-D');
const inputDegrees = document.querySelector('#input-degrees');
const inputLength = document.querySelector('#input-length');
const inputMaterial = document.querySelector('.select-material');

// Calc area function for different kind of elements
const calcArea = function () {
  if (inputSelectEl.value === 'Въздуховод') {
    const result =
      (((Number(inputSizeA.value) + Number(inputSizeB.value)) * 2) / 1000) *
      (Number(inputLength.value) / 1000);

    return Number(result.toFixed(2));
  } else if (inputSelectEl.value === 'Коляно') {
    const result =
      (((Number(inputSizeA.value) + Number(inputSizeB.value)) * 2) / 1000) *
      (((Number(inputSizeA.value) / 1000) * Number(inputDegrees.value) * 3.14) /
        180 +
        (2 * Number(inputLength.value)) / 1000);

    return Number(result.toFixed(2));
  } else if (inputSelectEl.value === 'Изместване') {

    //TODO

    const result =
      (((Number(inputSizeA.value) + Number(inputSizeB.value)) * 2) / 1000) *
      (Number(inputLength.value) / 1000);

    return Number(result.toFixed(2));
  } else if (inputSelectEl.value === 'Преход правоъгълен към правоъгълен') {
    const result =
      
    //TODO

    return Number(result.toFixed(2));
  } else if (inputSelectEl.value === 'Преход към кръгъл') {
    const result =
      
    //TODO

    return Number(result.toFixed(2));
  } else if (inputSelectEl.value === 'Тройник') {
    const result =
      
    //TODO

    return Number(result.toFixed(2));
  } else if (inputSelectEl.value === 'Капак') {
    const result =
      
    //TODO

    return Number(result.toFixed(2));
  } else if (inputSelectEl.value === 'Смукател стенен') {
    const result =
      
    //TODO

    return Number(result.toFixed(2));
  } else if (inputSelectEl.value === 'Смукател островен') {
    const result =
      
    //TODO

    return Number(result.toFixed(2));
  }
};

calcArea();

// Add new element after clicking 'Добави' button
document.querySelector('.btn-add').addEventListener('click', function () {});
