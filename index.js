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
const resultTotalArea = document.querySelector('.area-total');
const resultTotalWeight = document.querySelector('.weight-total');
const resultTextTotal = document.querySelector('.text-total');

// Variables for input divs

const inputDivC = document.querySelector('.inputC');
const inputDivD = document.querySelector('.inputD');
const inputDivDegrees = document.querySelector('.inputDegrees');

// Variable for 'X' button

const removeBtn = document.getElementsByClassName('btn-remove');

// Variable for elements with 'para' class

const resultPara = document.getElementsByClassName('para');

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

// Checks what element is selected and hides unnecessary input fields

//TODO To finish the function for the rest of the elements

const selectedEl = function () {
  if (inputSelectEl.value === 'Въздуховод') {
    document.querySelector('.inputC').classList.add('hidden');
    document.querySelector('.inputD').classList.add('hidden');
    document.querySelector('.inputDegrees').classList.add('hidden');
  } else if (inputSelectEl.value === 'Коляно') {
    document.querySelector('.inputC').classList.add('hidden');
    document.querySelector('.inputD').classList.add('hidden');
    inputDivDegrees.classList.remove('hidden');
  } else if (inputSelectEl.value === 'Преход правоъгълен към правоъгълен') {
    document.querySelector('.inputC').classList.remove('hidden');
    document.querySelector('.inputD').classList.remove('hidden');
    document.querySelector('.inputDegrees').classList.add('hidden');
  }
};

// Add new paragraph functions for eack element

const addElementDescription = function () {
  const newParagraph = document.createElement('p'); // Create a paragraph node
  newParagraph.classList.add('para-flexbox'); // Add class to the created element
  if (inputSelectEl.value === 'Въздуховод') {
    // Store an input value to  a variable
    const resultDescriptionText = document.createTextNode(
      `${inputSelectEl.value} с размери ${inputSizeA.value}x${inputSizeB.value}mm, ламарина дебелина ${inputMaterialThickness.value}mm`
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

// Calculates the total area from the added elements

const calcTotalArea = function () {
  const areaResults = document.querySelectorAll(
    '.result-area>p:not(.hidden):not(.weight-total)'
  );
  let total = 0;
  for (let i = 0; i < areaResults.length; i++) {
    total += Number(areaResults[i].innerHTML);
  }
  return total.toFixed(2);
};

// Calculates the total weight from the added elements

const calcTotalWeight = function () {
  const areaResults = document.querySelectorAll(
    '.result-weight>p:not(.hidden):not(.weight-total)'
  );
  let total = 0;
  for (let i = 0; i < areaResults.length; i++) {
    total += Number(areaResults[i].innerHTML);
  }
  return total.toFixed(2);
};

//TODO To make validation for the input fields

//TODO When 'Добави' button is clicked - the unnessesary fields to be hidden

//EVENT LISTENERS

// Checks what element is selected and removes the unnecessary fields

document
  .querySelector('.select-element')
  .addEventListener('click', function () {
    selectedEl();
  });

// Add new element after clicking 'Добави' button

document.querySelector('.btn-add').addEventListener('click', function () {
  calc();
  addRemoveButton();
  resultTotalArea.textContent = 0;
  resultTotalArea.textContent = calcTotalArea();
  resultTotalArea.style.fontWeight = 600;
  resultTotalWeight.textContent = 0;
  resultTotalWeight.textContent = calcTotalWeight();
  resultTotalWeight.style.fontWeight = 600;
  resultTextTotal.textContent = 'Общо';
  resultTextTotal.style.fontWeight = 600;
});

// When 'X' button is clicked hides all elements on that row

const removeBtnCheck = function () {
  if (removeBtn) {
    for (let i = 0; i < removeBtn.length; i++) {
      removeBtn[i].onclick = function () {
        this.parentElement.classList.add('hidden');
        resultDegrees.childNodes[i].classList.add('hidden');
        resultLength.childNodes[i].classList.add('hidden');
        resultArea.childNodes[i].classList.add('hidden');
        resultWeight.childNodes[i].classList.add('hidden');
        resultMaterial.childNodes[i].classList.add('hidden');
        resultTotalArea.textContent = 0;
        resultTotalArea.textContent = calcTotalArea();
        resultTotalWeight.textContent = 0;
        resultTotalWeight.textContent = calcTotalWeight();
      };
    }
  }
};
// Adds 'X' button in the description-results paragraph for each added item

const addRemoveButton = function () {
  const existingDiv = document.querySelector('.para-flexbox');
  const newButton = document.createElement('button');
  const newButtonText = document.createTextNode('\u00D7');
  newButton.appendChild(newButtonText);
  newButton.classList.add('btn', 'btn-outline-dark', 'btn-remove');
  existingDiv.appendChild(newButton);
  removeBtnCheck();
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
  resultTotalArea.textContent = '';
  resultTotalWeight.textContent = '';
});
