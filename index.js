'use strict';

// Variables for the input fields

const inputSelectEl = document.querySelector('.select-element');
const inputSizeA = document.querySelector('#input-size-A');
const inputSizeB = document.querySelector('#input-size-B');
const inputSizeC = document.querySelector('#input-size-C');
const inputSizeD = document.querySelector('#input-size-D');
const inputDegrees = document.querySelector('#input-degrees');
const inputLength = document.querySelector('#input-length');
const inputMaterialType = document.querySelector('.input-material-type');
const inputMaterialThickness = document.querySelector(
  '#input-material-thickness'
);

//Variables for result fields

const resultDescription = document.querySelector('.result-description');
const resultDegrees = document.querySelector('.result-degrees');
const resultLength = document.querySelector('.result-length');
const resultMaterial = document.querySelector('.result-material');
const resultArea = document.querySelector('.result-area');
const resultWeight = document.querySelector('.result-weight');

// Calculate area function  - calculates the area of the selected element

const calcArea = function () {
  let result = 0;
  if (inputSelectEl.value === 'Въздуховод') {
    result =
      (((Number(inputSizeA.value) + Number(inputSizeB.value)) * 2) / 1000) *
      (Number(inputLength.value) / 1000);

    return Number(result.toFixed(2));
  } else if (inputSelectEl.value === 'Коляно') {
    result =
      (((Number(inputSizeA.value) + Number(inputSizeB.value)) * 2) / 1000) *
      (((Number(inputSizeA.value) / 1000) * Number(inputDegrees.value) * 3.14) /
        180 +
        (2 * Number(inputLength.value)) / 1000);

    return Number(result.toFixed(2));
  } else if (inputSelectEl.value === 'Изместване') {
    //TODO

    result =
      (((Number(inputSizeA.value) + Number(inputSizeB.value)) * 2) / 1000) *
      (Number(inputLength.value) / 1000);

    return Number(result.toFixed(2));
  } else if (inputSelectEl.value === 'Преход правоъгълен към правоъгълен') {
    result =
      (((Number(inputSizeA.value) + Number(inputSizeB.value)) * 2) / 1000) *
      (Number(inputLength.value) / 1000);

    //TODO

    return Number(result.toFixed(2));
  } else if (inputSelectEl.value === 'Преход към кръгъл') {
    result =
      (((Number(inputSizeA.value) + Number(inputSizeB.value)) * 2) / 1000) *
      (Number(inputLength.value) / 1000);

    //TODO

    return Number(result.toFixed(2));
  } else if (inputSelectEl.value === 'Тройник') {
    result =
      (((Number(inputSizeA.value) + Number(inputSizeB.value)) * 2) / 1000) *
      (Number(inputLength.value) / 1000);

    //TODO

    return Number(result.toFixed(2));
  } else if (inputSelectEl.value === 'Капак') {
    result =
      (((Number(inputSizeA.value) + Number(inputSizeB.value)) * 2) / 1000) *
      (Number(inputLength.value) / 1000);

    //TODO

    return Number(result.toFixed(2));
  } else if (inputSelectEl.value === 'Смукател стенен') {
    result =
      (((Number(inputSizeA.value) + Number(inputSizeB.value)) * 2) / 1000) *
      (Number(inputLength.value) / 1000);

    //TODO

    return Number(result.toFixed(2));
  } else if (inputSelectEl.value === 'Смукател островен') {
    result =
      (((Number(inputSizeA.value) + Number(inputSizeB.value)) * 2) / 1000) *
      (Number(inputLength.value) / 1000);

    //TODO

    return Number(result.toFixed(2));
  }
};

// Calculate weight function - calculates the weight of the selected element

const calcWeight = function () {
  let result = 0;
  if (inputMaterialType.value === 'Поцинкована') {
    result = calcArea() * Number(inputMaterialThickness.value) * Number(8);
    return Number(result.toFixed(2));
  } else if (inputMaterialType.value === 'Черна') {
    result = calcArea() * Number(inputMaterialThickness.value) * Number(7.8);
    return Number(result.toFixed(2));
  } else if (inputMaterialType.value === 'Алуминиева') {
    result = calcArea() * Number(inputMaterialThickness.value) * Number(2.7);
    return Number(result.toFixed(2));
  } else if (inputMaterialType.value === 'Неръждаема') {
    result = calcArea() * Number(inputMaterialThickness.value) * Number(8.5);
    return Number(result.toFixed(2));
  } else if (inputMaterialType.value === 'Медна') {
    result = calcArea() * Number(inputMaterialThickness.value) * Number(8.9);
    return Number(result.toFixed(2));
  }
};

// Add new paragraph functions for eack element

const addElementDescription = function () {
  const newParagraph = document.createElement('p'); // Create a paragraph node
  newParagraph.classList.add('para-flexbox'); // Add class to the created element
  if (inputSelectEl.value === 'Въздуховод') {
    // Store an input value to  a variable
    const resultDescriptionText = document.createTextNode(
      `${inputSelectEl.value} с размери ${inputSizeA.value}x${inputSizeB.value}mm`
    ); // Checks if there is an input and returns the result.If no input returns 0
    newParagraph.appendChild(resultDescriptionText); // Add the input value to the created paragraph
    if (resultDescription.firstChild) {
      // check if there are child elements before adding the new paragraph - if yes the new element is added on top
      resultDescription.prepend(newParagraph);
    } else {
      resultDescription.appendChild(newParagraph);
    }
  }
};

const addElementDegrees = function () {
  const newParagraph = document.createElement('p');
  const resultDescriptionText = document.createTextNode(
    `${inputDegrees.value}`
  );
  newParagraph.classList.add('para');
  newParagraph.appendChild(resultDescriptionText);
  if (resultDegrees.firstChild) {
    resultDegrees.prepend(newParagraph);
  } else {
    resultDegrees.appendChild(newParagraph);
  }
};

const addElementLength = function () {
  const newParagraph = document.createElement('p');
  const resultDescriptionText = document.createTextNode(`${inputLength.value}`);
  newParagraph.classList.add('para');
  newParagraph.appendChild(resultDescriptionText);
  if (resultLength.firstChild) {
    resultLength.prepend(newParagraph);
  } else {
    resultLength.appendChild(newParagraph);
  }
};

const addElementMaterial = function () {
  const newParagraph = document.createElement('p');
  const resultDescriptionText = document.createTextNode(
    `${inputMaterialType.value}`
  );
  newParagraph.classList.add('para');
  newParagraph.appendChild(resultDescriptionText);
  if (resultMaterial.firstChild) {
    resultMaterial.prepend(newParagraph);
  } else {
    resultMaterial.appendChild(newParagraph);
  }
};

const addElementArea = function () {
  const newParagraph = document.createElement('p');
  const resultDescriptionText = document.createTextNode(`${calcArea()}`);
  newParagraph.classList.add('para');
  newParagraph.appendChild(resultDescriptionText);
  if (resultArea.firstChild) {
    resultArea.prepend(newParagraph);
  } else {
    resultArea.appendChild(newParagraph);
  }
};

const addElementWeight = function () {
  const newParagraph = document.createElement('p');
  const resultDescriptionText = document.createTextNode(`${calcWeight()}`);
  newParagraph.classList.add('para');
  newParagraph.appendChild(resultDescriptionText);
  if (resultWeight.firstChild) {
    resultWeight.prepend(newParagraph);
  } else {
    resultWeight.appendChild(newParagraph);
  }
};

// Function that adds the results from the calculations function as new paragraph

const calc = function () {
  addElementDescription();
  addElementDegrees();
  addElementLength();
  addElementMaterial();
  addElementArea();
  addElementWeight();
};

//TODO On click to remove the results on this row

//TODO To make validation for the input fields

// Add new element after clicking 'Добави' button

document.querySelector('.btn-add').addEventListener('click', function () {
  calc();
  addRemoveButton();
});

// Adds 'X' button in the description-results paragraph for each added item

const addRemoveButton = function () {
  const existingDiv = document.querySelector('.para-flexbox');
  const newButton = document.createElement('button');
  const newButtonText = document.createTextNode('\u00D7');
  newButton.appendChild(newButtonText);
  newButton.classList.add('btn', 'btn-outline-dark', 'btn-remove');
  existingDiv.appendChild(newButton);
};

// Reset all values after clicking 'Нулиране' button

document.querySelector('.btn-reset').addEventListener('click', function () {
  document.querySelectorAll('.para-flexbox').forEach(el => el.remove());
  document.querySelectorAll('.para').forEach(el => el.remove());
  inputSelectEl.value = 'Вид елемент';
  inputSizeA.value = '';
  inputSizeB.value = '';
  inputSizeC.value = '';
  inputSizeD.value = '';
  inputDegrees.value = '';
  inputLength.value = '';
  inputMaterialType.value = 'Тип';
  inputMaterialThickness.value = '';
});
