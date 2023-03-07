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

var tmp = "";
var tmp2 = "";

/**
 * Increment counter
 */
var copyObsButton = document.getElementById("copy-button");
var count;

function countObs() {
  minchars = document.getElementById("ncharsmin").value;
  nc = document.getElementById("output").value.length;
  updateText();
  if (nc >= minchars) {
    clearErrorMsg();
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://www.esferatic.com/obs/php/write.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("count=" + count);
    getCount();
    postMsg("");
  } else {
    errorMsg("La observación es demasiado breve. Escribe al menos " + minchars + " caracteres.");
  }
}

/**
 * Read counter
 */
function getCount() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://www.esferatic.com/obs/php/get_count.php", true);
  xhr.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      // update the UI with the count value returned from the server
      count = xhr.responseText;
      document.getElementById("obsc").textContent = "#" + count;
    }
  };
  xhr.send();
}
getCount();

/**
 * Updates grade
 */
function updateGrade() {
  var gE = document.getElementById("grade");
  var g = gE.value;
  var gl = document.getElementById("gradelabel");
  if (g > -1) {
    gl.textContent = "Calificación: " + g;
    playSound("blop");
  } else {
    gl.textContent = "Selecciona una calificación";
  }
  gE.style.setProperty('--value', g);
  updateText();
}
updateGrade();

/**
 * 
 * @param {*} soundName 
 */
function playSound(soundName) {
  const audio = new Audio('multimedia/' + soundName + '.mp3');
  audio.play();
}



/**
 * 
 */
function showSubject() {
  var theSubject = document.getElementById("subject").value;
  switch (theSubject) {
    case "Informática":
      theID = "informatica";
      break;
    case "Inteligencia Artificial, Programación y Robótica":
      theID = "informatica";
      break;
    case "Taller de Relaciones Digitales Responsables":
      theID = "informatica";
      break;
    case "Matemáticas":
      theID = "matematicas";
      break;
    default:
      theID = "";
  }

  if (theID != "") {
    var div = document.getElementById(theID);
    div.className = "group visible";
  }

  updateHeaders();
}


/**
 * Update headers
 */
function updateHeaders() {
  document.getElementById("output").textContent = "";

  firstName = document.getElementById("name").value;
  lastName = document.getElementById("lastname").value;
  fullName = firstName + " " + lastName;

  hElement = document.getElementById("h3-positive");
  hElement.textContent = "Aspectos positivos de " + fullName;

  hElement = document.getElementById("h3-negative");
  hElement.textContent = "Aspectos negativos de " + fullName;

  copyObsElement = document.getElementById("copy-button");
  copyObsElement.textContent = "Copiar observación de " + firstName;

  subject = document.getElementById("subject").value;

  var str = "Observaciones sobre " + fullName;
  if (subject != "") {
    str = str + " para la asignatura de " + subject;
  }
  postMsg(str);
}

/**
 * Update student report
 */
function updateText() {
  let theName = document.getElementById("name").value;
  if (theName != "") {
    let msg = "";

    if (document.getElementById("ft-start").checked) {
      msg += document.getElementById("freeobs").value + ". ";
      //msg += "\n";
    }

    const listP = document.querySelector("#positive-list");
    const listItemsP = listP.querySelectorAll("li");
    const listContentP = Array.from(listItemsP).map(item => item.textContent);
    const combinedListP = listContentP.join(" ");
    if (listItemsP.length > 0) {
      msg += "\n" + combinedListP + " ";
    }

    const listN = document.querySelector("#negative-list");
    const listItemsN = listN.querySelectorAll("li");
    const listContentN = Array.from(listItemsN).map(item => item.textContent);
    const combinedListN = listContentN.join(" ");
    if (listItemsN.length > 0) {
      msg += "" + combinedListN + " ";
    }

    const listV = document.querySelector("#verb-list");
    const listItemsV = listV.querySelectorAll("li");
    const listContentV = Array.from(listItemsV).map(item => item.textContent);
    const combinedListV = listContentV.join(" ");
    if (listItemsV.length > 0) {
      msg += "\n" + combinedListV + " ";
    }

    for (let i = 1; i <= 10; i++) {
      msg += document.getElementById("rating_" + i).textContent;
    }

    const ncheckboxes = 8;
    for (let i = 1; i <= ncheckboxes; i++) {
      strid = "checkboxes" + i.toString();
      var checkboxes_x = document.getElementById(strid);
      msg += updateCheckboxes(checkboxes_x);
    }



    if (document.getElementById("ft-end").checked) {
      msg += document.getElementById("freeobs").value + ". ";
    }

    var g = document.getElementById("grade").value;
    if (g >= 0) {
      msg += getGradeComment(g);
    }

    if (document.getElementById("showdate").checked) {
      thedate = document.getElementById("datetime").value;
      msg += "\n[" + getTheDate() + "]";
    }

    // eliminar esta línea
    tmp = document.getElementById("output").value;
    document.getElementById("output").value = msg;
    updateChars();
    updateHeaders();
    //translateText();
  }
}

/**
 * Comentarios según la calificación
 * @param {} grade 
 * @returns 
 */
function getGradeComment(grade) {
  var comment = [
    'Calificación: 0',
    'Calificación: 1',
    'Calificación: 2',
    'Calificación: 3',
    'Calificación: 4',
    'Calificación: 5',
    'Calificación: 6',
    'Calificación: 7',
    'Calificación: 8',
    'Calificación: 9',
    'Calificación: 10',
  ];
  return comment[grade];
}
/**
 * 
 * @param {*} cb 
 * @param {*} msg 
 * @returns 
 */
function updateCheckboxes(thecheckbox) {
  var message = "";
  const inputs = thecheckbox.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      message += inputs[i].value;
    }
  }
  return message;
}

/**
 * 
 */
function updateChars() {
  const pBar = document.getElementById("progressbar");
  var textElement = document.getElementById("output");
  var resultElement = document.getElementById("result");
  var charSelector = document.getElementById("nchars");
  const maxChars = charSelector.value;
  var textContent = textElement.value;
  var characterCount = textContent.length;
  var percent = Math.round((characterCount / maxChars) * 100);

  if (percent < 25) {
    pBar.style.color = "green";
  } else {
    if (percent < 50) {
      pBar.style.color = "yellow";
    }

  }

  if (percent <= 100) {
    pBar.value = percent;
    resultElement.textContent = "";
    /*for (let i = 0; i < (percent/5); i++) {
            resultElement.textContent += "◼︎";
    }
    */
    resultElement.textContent += "" + characterCount + " caracteres (" + percent + "%)";
    textElement.style.backgroundColor = 'white';
    textElement.style.color = 'black';
  } else {
    resultElement.textContent = "100%";
    textElement.style.backgroundColor = 'OrangeRed';
    textElement.style.color = 'white';
    resultElement.textContent = "Observación demasiado extensa";
  }
}

/**
 * 
 */
function grabTextarea() {
  var tA = document.getElementById("output");
  tmp = tA.textContent;
  tA.textContent = "¡Muéveme!";
  tA.style.cursor = 'grabbing';
  tA.style.backgroundColor = "#CEE7FF";
  tA.style.color = "black";
}

/**
 * 
 */
function dropTextarea() {
  var tA = document.getElementById("output");
  tA.textContent = tmp;
  tA.style.cursor = 'grab';
  tA.style.backgroundColor = "#ffffff";
  tA.style.color = "black";
}

/**
 * 
 */
function animateTextarea() {
  var tA = document.getElementById("output");
}

/**
 * Get suggestions for subject
 */
const inputSubject = document.getElementById("subject");
const suggestionsContainer = document.getElementById("suggestions-container");

const options = [
  "Alemán",
  "Biología y Geología",
  "Ciencias aplicadas a la actividad profesional",
  "Ciencias sociales, geografía e historia",
  "Cultura clásica",
  "Economía",
  "Economía de la Empresa",
  "Educación física",
  "Educación plástica, visual y audiovisual",
  "Educación para la Ciudadanía y los Derechos Humanos",
  "Ética y valores sociales y cívicos",
  "Filosofía",
  "Física y Química",
  "Formación y orientación laboral",
  "Francés",
  "Fotografía y Vídeo",
  "Geografía e Historia",
  "Historia",
  "Historia del Arte",
  "Informática",
  "Inglés",
  "Inteligencia Artificial, Programación y Robótica",
  "Laboratorio",
  "Latín",
  "Lengua",
  "Matemáticas",
  "Música",
  "Proyecto Interdisciplinar",
  "Religión",
  "Robótica",
  "Taller de Relaciones Digitales Responsables",
  "Tecnología",
  "Tecnología y Digitalización",
  "Tecnologías de la Información y la Comunicación",
  "Valencià"
];



inputSubject.addEventListener("input", function () {
  const value = inputSubject.value;
  const suggestions = getSuggestions(value);
  showSuggestions(suggestions);
});

function getSuggestions(value) {
  return options.filter(option => option.toLowerCase().startsWith(value.toLowerCase()));
}

/**
 * 
 * @param {*} suggestions 
 */
function showSuggestions(suggestions) {
  suggestionsContainer.innerHTML = "";
  suggestions.forEach(suggestion => {
    const suggestionElement = document.createElement("div");
    suggestionElement.textContent = suggestion;
    suggestionElement.addEventListener("click", function () {
      inputSubject.value = suggestion;
      showSubject();
      suggestionsContainer.innerHTML = "";
    });
    suggestionsContainer.appendChild(suggestionElement);
  });
}

/**
 * Translate
 */

const inputTextT = document.getElementById("output");
const outputTextT = document.getElementById("translated-div");

inputTextT.addEventListener("input", async function () {
  const response = await fetch("https://api.openai.com/v1/engines/chat-davinci/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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"
    },
    body: JSON.stringify({
      prompt: `Translate the following from Spanish to Valencian: ${inputTextT.value}`,
      max_tokens: 100,
      temperature: 0.5
    })
  });

  const jsonResponse = await response.json();
  outputTextT.value = jsonResponse.choices[0].text;
});

/**
 * Toggle Info (Instructions) Block
 */
function toggleInfo() {
  var info = document.getElementById("info");
  if (info.style.display === "none") {
    info.style.display = "block";
    document.getElementById("readme-button").textContent = "Leído";
    document.getElementById("readme-button").backgroundColor = "SteelBlue";
  } else {
    info.style.display = "none";
    document.getElementById("readme-button").textContent = "Léeme";
    document.getElementById("readme-button").backgroundColor = "Red";

  }
}


function closeSubject(name) {
  var subject = document.getElementById(name);
  subject.className = "group hidden";
}