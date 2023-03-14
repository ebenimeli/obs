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

window.onload = function () {
  document.getElementById("name").focus();
  setCurrentDateTime();
};

/**
 * 
 */
function setCurrentDateTime() {
  // Get the current date and time
  const now = new Date();

  // Format the date and time in ISO format
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const isoDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

  // Set the value of the input element to the formatted date and time
  document.getElementById("datetime").value = isoDateTime;
}

/**
 * 
 * @returns 
 */
function getTheDate() {
  const now = new Date(document.getElementById("datetime").value);

  // Format the date and time in ISO format
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  //const hours = now.getHours().toString().padStart(2, '0');
  //const minutes = now.getMinutes().toString().padStart(2, '0');
  theDate = `${day}/${month}/${year}`;
  return theDate;
}

function errorMsg(error) {
  document.getElementById("msgbox").style.backgroundColor = "#FFC0CB";
  infoMsg = document.getElementById("infomsg");
  infoMsg.style.color = "black";
  infoMsg.textContent = error;
}

function clearErrorMsg() {
  errorMsg("");
}

function postMsg(infomsg) {
  document.getElementById("msgbox").style.backgroundColor = "#F5F5F5";
  iMsg = document.getElementById("infomsg");
  iMsg.style.color = "black";
  iMsg.textContent = infomsg;
}

function clearInfoMsg() {
  postMsg("");
}

function newObs() {
  resetInputs();
}

function resetInputs() {
  var outputText = document.getElementById("output");
  outputText.value = ""; 

  var inputsText = document.querySelectorAll('input[type="text"]');
  for (var i = 0; i < inputsText.length; i++) {
    inputsText[i].value = "";
  }

  var textAreas = document.querySelectorAll('textarea');
  for (var i = 0; i < textAreas.length; i++) {
    textAreas[i].value = "";
  }

  var myListP = document.getElementById("positive-list");
  while (myListP.firstChild) {
    myListP.removeChild(myListP.firstChild);
  }

  var myListN = document.getElementById("negative-list");
  while (myListN.firstChild) {
    myListN.removeChild(myListN.firstChild);
  }

  var myListV = document.getElementById("verb-list");
  while (myListV.firstChild) {
    myListV.removeChild(myListV.firstChild);
  }

  var inputsCheckbox = document.querySelectorAll('input[type="checkbox"]');
  for (var i = 0; i < inputsCheckbox.length; i++) {
    inputsCheckbox[i].checked = false;
  }

  const rating_01 = [...document.getElementsByClassName("rating_1")];
  const rating_02 = [...document.getElementsByClassName("rating_2")];
  const rating_03 = [...document.getElementsByClassName("rating_3")];
  const rating_04 = [...document.getElementsByClassName("rating_4")];
  const rating_05 = [...document.getElementsByClassName("rating_5")];
  const rating_06 = [...document.getElementsByClassName("rating_6")];
  const rating_07 = [...document.getElementsByClassName("rating_7")];
  const rating_08 = [...document.getElementsByClassName("rating_8")];
  const rating_09 = [...document.getElementsByClassName("rating_9")];
  const rating_10 = [...document.getElementsByClassName("rating_10")];

  clearRating("rating_1", rating_01);
  clearRating("rating_2", rating_02);
  clearRating("rating_3", rating_03);
  clearRating("rating_4", rating_04);
  clearRating("rating_5", rating_05);
  clearRating("rating_6", rating_06);
  clearRating("rating_7", rating_07);
  clearRating("rating_8", rating_08);
  clearRating("rating_9", rating_09);
  clearRating("rating_10", rating_10);

}

function clearRating(ratingItem, stars) {
  const starClassInactive = ratingItem + " far fa-star";

  var stars = document.querySelectorAll(".fa-star");
  for (var i = 0; i < stars.length; i++) {
    stars[i].className = starClassInactive;
  }
  document.getElementById(ratingItem).textContent = "";

}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

document.getElementById("name").addEventListener("blur", function () {
  var field = this.value;
  if (!field) {
    var str = "Por favor, introduce al menos el nombre del alumno. Aparecerá en alguna frase de las observaciones.";
    errorMsg(str);
    document.getElementById("studentinfo").textContent = "¿Cuál es el nombre del alumno?";
    document.getElementById("name").focus();
  } else {
    document.getElementById("studentinfo").textContent = "";
    postMsg("");
    updateText();
  }
});

window.onscroll = function () {
  //document.getElementById("output").style.top = (window.pageYOffset/1.5) + "px";
};
