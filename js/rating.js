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

/**
 * 
 * @param {*} item 
 * @param {*} stars 
 */
function executeRating(ratingItem,stars) {
  const starClassActive = ratingItem + " fas fa-star";
  const starClassInactive = ratingItem + " far fa-star";
  const starsLength = stars.length;
  let i; let value = 0;

  stars.map((star) => {
    star.onclick = () => {
        playSound("blop");

      i = stars.indexOf(star);
      value = i+1;

      if (star.className === starClassInactive) {
        for (i; i >= 0; --i) {
            stars[i].className = starClassActive;
        }
        updateRatingItem(ratingItem,value);
      } else {
        for (i; i < starsLength; ++i) {
            stars[i].className = starClassInactive;
        }
        updateRatingItem(ratingItem,0);
      }
    };
  });
}

executeRating("rating_1",rating_01);
executeRating("rating_2",rating_02);
executeRating("rating_3",rating_03);
executeRating("rating_4",rating_04);
executeRating("rating_5",rating_05);
executeRating("rating_6",rating_06);
executeRating("rating_7",rating_07);
executeRating("rating_8",rating_08);
executeRating("rating_9",rating_09);
executeRating("rating_10",rating_10);


/**
 * 
 * @param {*} item 
 * @param {*} value 
 */
function updateRatingItem(item,value) {
    if(item == "rating_1") {
        updateRating_01(value);
    }
    if(item == "rating_2" ) {
        updateRating_02(value);
    }
    if(item == "rating_3" ) {
        updateRating_03(value);
    }
    if(item == "rating_4" ) {
        updateRating_04(value);
    }
    if(item == "rating_5" ) {
        updateRating_05(value);
    }
    if(item == "rating_6" ) {
        updateRating_06(value);
    }
    if(item == "rating_7" ) {
        updateRating_07(value);
    }
    if(item == "rating_8" ) {
        updateRating_08(value);
    }
    if(item == "rating_9" ) {
        updateRating_09(value);
    }
    if(item == "rating_10" ) {
        updateRating_10(value);
    }
}

/**
 * 
 * @param {*} value 
 */
function updateRating_01(value) {
    studentName = document.getElementById("name").value;
    let a = "";
    switch (value) {
        case 1:
            a = "Tiene una actitud negativa en el aula. ";
            break;
        case 2:
            a = "Su actitud puede mejorar. ";
            break;
        case 3:
            a = "Tiene buen comportamiento. ";
            break;
        case 4:
            a = "Muestra muy buena actitud. ";
            break;
        case 5:
            a = "Su actitud es excelente. ";
            break;          
        default:
            a = "";
            break;
    }
    aE = document.getElementById("rating_1");
    aE.textContent = a;
    updateText();
}

/**
 * 
 * @param {*} value 
 */
function updateRating_02(value) {
    studentName = document.getElementById("name").value;
    subject = document.getElementById("subject").value;

    let a = "";
    switch (value) {
        case 1:
            a = "Muestra abandono de la asignatura.";
            break;
        case 2:
            a = "Apenas muestra interés por la asignatura. ";
            break;
        case 3:
            a = "Tiene interés por la asignatura. ";
            break;
        case 4:
            a = "Muestra mucho interés por la asignatura. ";
            break;
        case 5:
            a = "Muestra muchísimo interés y curiosidad por la asignatura. ";
            break;          
        default:
            a = "";
            break;
    }
    aE = document.getElementById("rating_2");
    aE.textContent = a;
    updateText();
}

/**
 * 
 * @param {*} value 
 */
function updateRating_03(value) {
    studentName = document.getElementById("name").value;
    let a = "";
    switch (value) {
        case 1:
            a = "Nunca participa en las actividades de clase. ";
            break;
        case 2:
            a = "Apenas participa en las actividades de clase. ";
            break;
        case 3:
            a = "Participa de vez en cuando. ";
            break;
        case 4:
            a = "Suele participar en clase. ";
            break;
        case 5:
            a = "Siempre participa en las actividades de clase. ";
            break;          
        default:
            a = "";
            break;
    }
    aE = document.getElementById("rating_3");
    aE.textContent = a;
    updateText();
}

/**
 * 
 * @param {*} value 
 */
function updateRating_04(value) {
    studentName = document.getElementById("name").value;
    let a = "";
    switch (value) {
        case 1:
            a = "Debe organizarse mejor. ";
            break;
        case 2:
            a = "Puede mejorar su organización personal. ";
            break;
        case 3:
            a = "Se organiza bien en general. ";
            break;
        case 4:
            a = "Mantiene muy buena organización. ";
            break;
        case 5:
            a = "Cuida especialmente los aspectos de organización. ";
            break;          
        default:
            a = "";
            break;
    }
    aE = document.getElementById("rating_4");
    aE.textContent = a;
    updateText();
}

/**
 * Apuntes
 * @param {} value 
 */
function updateRating_05(value) {
    studentName = document.getElementById("name").value;
    let a = "";
    switch (value) {
        case 1:
            a = "Apenas tiene apuntes y están muy desorganizados. ";
            break;
        case 2:
            a = "La organización y limpieza de sus apuntes puede mejorar. ";
            break;
        case 3:
            a = "Mantiene unos apuntes correctos y organizados. ";
            break;
        case 4:
            a = "Mantiene muy buena organización y limpieza en sus apuntes. ";
            break;
        case 5:
            a = "La organización y limpieza de sus apuntes es excelente. ";
            break;          
        default:
            a = "";
            break;
    }
    aE = document.getElementById("rating_5");
    aE.textContent = a;
    updateText();
}

/**
 * Trabajo en equipo
 * @param {*} value 
 */
function updateRating_06(value) {
    studentName = document.getElementById("name").value;
    let a = "";
    switch (value) {
        case 1:
            a = "Debe mejorar mucho sus habilidades para trabajar en equipo. ";
            break;
        case 2:
            a = "Puede mejorar sus habilidades para trabajar en equipo. ";
            break;
        case 3:
            a = "Trabaja bien en equipo en clase. ";
            break;
        case 4:
            a = "Siempre trabaja muy bien en equipo con sus compañeros. ";
            break;
        case 5:
            a = "Sus habilidades para trabajar en equipo son excelentes. ";
            break;          
        default:
            a = "";
            break;
    }
    aE = document.getElementById("rating_6");
    aE.textContent = a;
    updateText();
}

/**
 * Convivencia y habilidades sociales
 * @param {*} value 
 */
function updateRating_07(value) {
    studentName = document.getElementById("name").value;
    let a = "";
    switch (value) {
        case 1:
            a = "Muestra muy poco interés y preocupación por el bienestar de los demás. De vez en cuando provoca conflictos y tensiones en el aula. ";

            break;
        case 2:
            a = "Muestra poco interés y preocupación por el bienestar de los demás. ";
            break;
        case 3:
            a = "Muestra habilidades sociales adecuadas en el aula, pero tiene algunas áreas que necesitan mejora. ";
            break;
        case 4:
            a = "Ayuda a crear un ambiente positivo y agradable para la mayoría en el aula. ";
            break;
        case 5:
            a = "Muestra respeto, empatía, cooperación y se preocupa por el bienestar de los demás. ";
            break;          
        default:
            a = "";
            break;
    }
    aE = document.getElementById("rating_7");
    aE.textContent = a;
    updateText();
}

/**
 * Esfuerzo y dedicación en el aula
 * @param {*} value 
 */
function updateRating_08(value) {
    studentName = document.getElementById("name").value;
    let a = "";
    switch (value) {
        case 1:
            //a = studentName + " requiere una atención y seguimiento constantes para aprender y mejorar su desempeño. Deberá esforzarse mucho para superar la asignatura. ";
            a = "Requiere una atención y seguimiento constantes para aprender y mejorar su desempeño. "
            break;
        case 2:
            //a = studentName + " necesita motivación y seguimiento adicional para aprender y mejorar su desempeño. Deberá trabajar para superar la asignatura. ";
            a = "Necesita motivación y seguimiento adicional para aprender y mejorar su desempeño. ";
            break;
        case 3:
            //a = studentName + " ha mostrado en este segundo trimestre esfuerzo y dedicación en su trabajo académico, pero tiene algunas áreas que necesitan mejora. ";
            a = "Muestra un nivel adecuado de esfuerzo y dedicación en su trabajo académico, pero tiene algunas áreas que necesitan mejora. ";
            break;
        case 4:
            //a = studentName + " ha mostrado en este trimestre interés en aprender y mejorar su desempeño. ¡Enhorabuena! ";
            a = "Muestra interés en aprender y mejorar su desempeño. ";
            break;
        case 5:
            //a = studentName + " ha mostrado en este segundo trimestre un alto nivel de esfuerzo y dedicación en su trabajo académico. ¡Enhorabuena! ";
            a = "Muestra un alto nivel de esfuerzo y dedicación en su trabajo académico. ";
            break;          
        default:
            a = "";
            break;
    }
    aE = document.getElementById("rating_8");
    aE.textContent = a;
    updateText();
}

/**
 * Creatividad y pensamiento crítico
 * @param {*} value 
 */
function updateRating_09(value) {
    studentName = document.getElementById("name").value;
    let a = "";
    switch (value) {
        case 1:
            a = "Presenta dificultades para entender y aplicar conceptos básicos que requieren pensamiento creativo y crítico. ";
            break;
        case 2:
            a = "Necesitar una guía y apoyo más intensivos para desarrollar su pensamiento creativo y crítico. ";
            break;
        case 3:
            a = "Muestra habilidades aceptables para pensar de manera creativa y crítica. ";
            break;
        case 4:
            a = "Demuestra habilidades sólidas para pensar de manera creativa y crítica. ";
            break;
        case 5:
            a = "Demuestra una capacidad sobresaliente para pensar de manera creativa y crítica. ";
            break;          
        default:
            a = "";
            break;
    }
    aE = document.getElementById("rating_9");
    aE.textContent = a;
    updateText();
}

/**
 * 
 * @param {*} value 
 */
function updateRating_10(value) {
    studentName = document.getElementById("name").value;
    let a = "";
    switch (value) {
        case 1:
            a = "Muestra una actitud negativa hacia el aprendizaje y requiere apoyo intensivo para participar en proyectos y actividades. ";
            break;
        case 2:
            a = "Tiene una actitud negativa hacia el aprendizaje y necesita apoyo adicional para participar en proyectos y actividades. ";
            break;
        case 3:
            a = "Demuestra un buen rendimiento y participa de manera adecuada en proyectos y actividades. ";
            break;
        case 4:
            a = "Demuestra un rendimiento sólido y una actitud positiva hacia el aprendizaje. ";
            break;
        case 5:
            a = "Demuestra un rendimiento excepcional y una actitud positiva hacia el aprendizaje. ";
            break;          
        default:
            a = "";
            break;
    }
    aE = document.getElementById("rating_10");
    aE.textContent = a;
    updateText();
}