/*
Copyright 2023 Enrique Benimeli - www.ebenimeli.org

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/** Aspectos positivos */
const select = document.querySelector('#positive');
const input = document.querySelector('#positive-text');
const addButton = document.querySelector('#add-button');
const list = document.querySelector('#positive-list');

/**
 * 
 */
function clearPositiveText() {
  const inputPositive = document.getElementById("positive-text");
  inputPositive.value = "";
}

/**
 * 
 */
function clearNegativeText() {
  const inputNegative = document.getElementById("negative-text");
  inputNegative.value = "";
}


addButton.addEventListener('click', function() {
  const selectedOption = select.options[select.selectedIndex].value;
  const inputText = input.value;
  const item = selectedOption + " " + inputText + ".";  
  const li = document.createElement('li');
  li.textContent = item;
  list.appendChild(li);
  playSound("add");
  updateText();
});

const positiveList = document.querySelector("#positive-list");
positiveList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      event.target.remove();
      updateText();
    }
  });


/** Aspectos negativos */
const selectN = document.querySelector('#negative');
const inputN = document.querySelector('#negative-text');
const addButtonN = document.querySelector('#add-button-neg');
const listN = document.querySelector('#negative-list');

addButtonN.addEventListener('click', function() {
  const selectedOption = selectN.options[selectN.selectedIndex].value;
  const inputText = inputN.value;
  const item = selectedOption + " " + inputText + ".";  
  const li = document.createElement('li');
  li.textContent = item;
  listN.appendChild(li);
  playSound("add");
  updateText();
});

const negativeList = document.querySelector("#negative-list");
negativeList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      event.target.remove();
      updateText();
    }
  });

  /** Verbos */
const selectV = document.querySelector('#verbs');
const inputV = document.querySelector('#verb-text');
const addButtonV = document.querySelector('#add-button-verb');
const listV = document.querySelector('#verb-list');
const noVerb = document.getElementById("noverb");

addButtonV.addEventListener('click', function() {
  const selectedOption = selectV.options[selectV.selectedIndex].value;
  const inputText = inputV.value;
  item = "";
  if(noVerb.checked == true) {
    item = "No " + selectedOption.toLowerCase() + " " + inputText + ".";
  } else {
    item = selectedOption + " " + inputText + ".";
  }
  const li = document.createElement('li');
  li.textContent = item;
  listV.appendChild(li);
  playSound("add");
  updateText();
});

const verbList = document.querySelector("#verb-list");
verbList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      event.target.remove();
      updateText();
    }
  });


function clearVerbText() {
  const inputVerb = document.getElementById("verb-text");
  inputVerb.value = "";
}