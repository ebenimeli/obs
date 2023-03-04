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

/** Botón copiar observación */
const inputText = document.getElementById("output");
const copyButton = document.getElementById("copy-button");

copyButton.addEventListener("click", function() {
  inputText.select();
  document.execCommand("copy");
  playSound("click");
  copyButton.innerHTML = "¡Copiada!";
  setTimeout(function() {
    copyButton.innerHTML = "Copiar observación";
  }, 2000);
});

/** Botón copiar observación */
const copyButton2 = document.getElementById("copy-button-2");

copyButton2.addEventListener("click", function() {
  inputText.select();
  document.execCommand("copy");
  playSound("click");
  copyButton2.innerHTML = "¡Copiada!";
  setTimeout(function() {
    copyButton2.innerHTML = "Copiar observación";
  }, 2000);
});

/**
   * Add comment
   */
const addBtn = document.querySelector("#add-comment");
addBtn.addEventListener("click", function() {
  const textbox = document.querySelector("#output");
  if( textbox.value != "" ) {
      const studentsList = document.querySelector("#students");
      const studName = document.getElementById("name").value;
      const studLastName = document.getElementById("lastname").value;
      const studElement = document.createElement("b");
      const obsElement = document.createElement("span");
      studElement.textContent = studName + " " + studLastName + ". ";
      const newItem = document.createElement("li");
      newItem.appendChild(studElement);
      obsElement.textContent = textbox.value;
      newItem.appendChild(obsElement);
      studentsList.appendChild(newItem);
      playSound("add");
  }
});

document.getElementById("download").addEventListener("click", function() {
  var list = document.getElementById("students");
  var items = list.getElementsByTagName("li");
  var text = "";
  for (var i = 0; i < items.length; i++) {
    text += (i + 1) + ". " + items[i].textContent + "\n";
  }
  var blob = new Blob([text], {type: "text/plain"});
  var link = document.createElement("a");
  link.download = "observaciones.txt";
  link.href = URL.createObjectURL(blob);
  link.click();
});