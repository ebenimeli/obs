<div id="header">
        <div id="menu">
            <a href="index.php" class="selected">Inicio</a> · 
            <a href="https://www.esferatic.com" target="_blank">Blog</a> · 
            <a href="about.php">Acerca de...</a> · 
            <a href="https://twitter.com/esferatic" target="_blank">@esferatic</a>
        </div>
</div>

<!-- Report box -->
<div id="sticky-box">
    <textarea id="output" oninput="updateChars()" onmousedown="grabTextarea()" onmouseup="dropTextarea()" onmouseover="animateTextarea()">Este cuadro mostrará automáticamente la observación a medida que vayas añadiendo información. Puedes editarlo al finalizar. Además, puedes hacer clic sobre él para moverlo a otra zona de la página.
    </textarea>
</div>

<!-- Just some space -->
<div id="emptyobs"></div>

<!-- Content -->
<div class="content">
    <div id="readme-button" class="obsbutton readme" onclick="toggleInfo()">Léeme</div>
    <br/><br/>

    <div id="info" class="group" style="display: none;">

    <img src="images/libreta.png" class="logo"/>
    <p class="instructions">
        <ul>
            <li>Esta aplicación web es <strong>gratuita</strong>.</li>
            <li>Esta herramienta <strong>no almacena la información</strong> que el usuario marca o introduce; tampoco el texto que genera.</li>
            <li>Recuerda que <strong>solo es un asistente</strong> para redactar una observación sobre el rendimiento académico de un estudiante.</li>
            <li>Es importante escribir en el cuadro de <strong>texto personalizado</strong> de la observación.</li>
            <li>Utiliza solo los campos y opciones más <strong>relevantes</strong>.</li>
            <li>Mantén una <strong>extensión adecuada</strong> para la observación. Puedes personalizar el <strong>número mínimo y máximo de caracteres</strong> y recibir un aviso cuando excedas el límite.</li>
            <li>Cuando tengas el texto definitivo, haz clic en <strong>«Copiar observación»</strong> para pegarla en tu documento o plataforma.</li>
            <li>También puedes hacer clic en <strong>«Añadir observación a la lista»</strong> para agregarla a una lista de observaciones que podrás descargar en formato texto más tarde.</li>
            <li>Si haces clic en <strong>«Nueva observación»</strong> se borrarán todos los campos excepto la lista de observaciones.</li>
        </ul>
    </p>
</div>

<div class="group">
    <!-- Report length -->
    <h3>Número de caracteres</h3>
    <p>
        Mínimo: <input type="number" step="10" id="ncharsmin" min="100" max="500" value="100" />
        Máximo: <input type="number" step="25" id="nchars" min="100" max="1000" value="300" />
    </p>
    <p>
        <meter id="progressbar" min="0" max="100" value="0" low="25" optimum="75" optimum="90"></meter>
    </p>
    <br/><br/>
    <input type="datetime-local" name="datetime" id="datetime">
    <br/><br/>
    <input type="checkbox" id="showdate" onchange="updateText()"> Mostrar fecha en la observación
    <br/>
    </div>


    <h1>Datos del alumno</h1>
    <div class="group">
        <div id="studentinfo" class="warning"></div>
        Nombre: <input type="text" id="name" onblur="updateHeaders()">
        Apellidos: <input type="text" id="lastname" oninput="updateHeaders()">
        <br/>
        <br/>
        Asignatura: <input type="text" id="subject" onkeyup="showSubject()">
        <br/>
        <br/>
        <div id="suggestions-container"></div>
        <br/>
        <div class="slider">
            <label for="fader" id="gradelabel">Calificación</label>
            <input type="range" min="-1" max="10" value="-1" id="grade" step="1" list="gradelist" onchange="updateGrade()">
            <datalist id="gradelist">
                <option value="-1" selected>Selecciona una calificación</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </datalist>
        </div>
    </div>
    <br/>
    
    <div id="copy-button" class="obsbutton" onclick="countObs()">Copiar observación</div>
    <div id="new-button" class="obsbutton" onclick="newObs()">Nueva observación</div>

    <br/><br/>
    <div class="group" id="msgbox">
        <div id="result"></div>
        <div id="infomsg"></div>
    </div>
    
    <?php $chknum =4; ?>
    <?php include_once("php/subjects/informatica.php") ?>
    <?php include_once("php/subjects/matematicas.php") ?>

    <h1>Observación</h1>
    <div class="group">
        <h3>Mis comentarios</h3>
        <textarea id="freeobs" oninput="updateText()"></textarea>
        <br/>
        <form>
        <input type="radio" id="ft-start" name="choice" value="start" onchange="updateText()" checked>
        <label for="element1">Al comienzo</label>
        
        <input type="radio" id="ft-end" name="choice" value="end" onchange="updateText()">
        <label for="element2">Al final</label>
      </form>
    </div>

    <!--
    <div>
        Añadir observación personal: <input type="text" id="input2" oninput="updateText()"><br/>
    </div>
    -->
    <br/>

    <!-- Aspectos positivos -->
    <div class="group">
        <h3 id="h3-positive">Aspectos destacables</h3>
            <select id="positive" onchange="clearPositiveText()">
                <option value="" selected>Selecciona una opción</option>
                <option>Muestra avance en</option>
                <option>Tiene habilidades y destrezas</option>
                <option>Puede</option>
                <option>Trabaja</option>
                <option>Persevera</option>
                <option>Coopera</option>
                <option>Muestra madurez y compromiso</option>
                <option>Hace un excelente trabajo</option>
                <option>Ha mejorado su rendimiento en</option>
                <option>Aplica adecuadamente las técnicas</option>
                <option>Hace un uso adecuado de</option>
          </select>
          <input type="text" id="positive-text" oninput="updateText()">
          <button id="add-button">Añadir</button>   
          <ol id="positive-list"></ol>
    </div>
  
    <!-- Aspectos negativos  -->
    <div class="group">
        <h3 id="h3-negative">Aspectos que puede mejorar</h3>
        <select id="negative" onchange="clearNegativeText()">
                <option value="" selected>Selecciona una opción</option>
                <option>Necesita apoyo en</option>
                <option>Hay que reforzar</option>
                <option>Está en proceso de</option>
                <option>Logra realizar el trabajo si</option>
                <option>Solo responde bien cuando</option>
                <option>En ocasiones, resuelve</option>
                <option>Algunas veces, </option>
                <option>Ocasionalmente, efectúa</option>
                <option>Le cuesta ponerse a trabajar en</option>
                <option>Muestra poco interés en las actividades de</option>
                <option>Conviene estudiar y repasar</option>
                <option>Puede lograr mejores resultados si</option>
                <option>Ha adquirido con dificultad los contenidos</option>
                <option>No ha adquirido los contenidos</option>
          </select>
          <input type="text" id="negative-text" oninput="updateText()">
          <button id="add-button-neg">Añadir</button>   
          <ol id="negative-list"></ol>
    </div>

    <!-- Verbos -->
    <div class="group">
        <h3 id="h3-negative">Aptitudes</h3>
        <input type="checkbox" id="noverb" value="No" onchange="updateText()">No

        <select id="verbs" onchange="clearVerbText()">
                <option value="" selected>Selecciona una opción</option>
                <option>Analiza</option>
                <option>Aplica</option>
                <option>Aprende</option>
                <option>Argumenta</option>
                <option>Colabora</option>
                <option>Compara</option>
                <option>Comprende</option>
                <option>Comunica</option>
                <option>Desarrolla</option>
                <option>Ejercita</option>
                <option>Expresa</option>
                <option>Identifica</option>
                <option>Innova</option>
                <option>Investiga</option>
                <option>Observa</option>
                <option>Organiza</option>
                <option>Participa</option>
                <option>Planifica</option>
                <option>Pregunta</option>
                <option>Presenta</option>
                <option>Reconoce</option>
                <option>Relata</option>
                <option>Resuelve</option>
                <option>Selecciona</option>
                <option>Sintetiza</option>
                <option>Traslada</option>
                <option>Usa</option> 
          </select>
          <input type="text" id="verb-text" oninput="updateText()">
          <button id="add-button-verb">Añadir</button>   
          <ol id="verb-list"></ol>
    </div>

    <div class="group">
        <h3 id="h3-attend">Asistencia y retrasos</h3>
        <table>
            <tr>
                <td>
                    <div id="checkboxes1">
                    <b>Negativos</b><br/><br/>
                    <input type="checkbox" value="Acumula algunos retrasos. " onchange="updateText()">Acumula algunos retrasos<br/>
                    <input type="checkbox" value="Acumula muchos retrasos. " onchange="updateText()">Acumula muchos retrasos<br/>
                    <input type="checkbox" value="Acumula muchas faltas de asistencia. " onchange="updateText()">Acumula muchas faltas de asistencia<br/>
                    <input type="checkbox" value="Acumula algunas faltas de asistencia. " onchange="updateText()">Acumula algunas faltas de asistencia<br/>
                    <input type="checkbox" value="No asiste a clase. " onchange="updateText()">No asiste a clase<br/>
                    <input type="checkbox" value="No muestra interés para ponerse al día tras una ausencia a clase. " onchange="updateText()">No se pone al día tras una ausencia a clase.<br/>

                </div>
                </td>
                <td>
                    <div id="checkboxes2">
                    <b>Positivos</b><br/><br/>
                    <input type="checkbox" value="Es puntual. " onchange="updateText()">Es puntual<br/>
                    <input type="checkbox" value="Siempre es muy puntual. " onchange="updateText()">Es muy puntual<br/>
                    <input type="checkbox" value="Comunica siempre sus retrasos y faltas de asistencia. " onchange="updateText()">Comunica sus retrasos y faltas de asistencia<br/>
                    <input type="checkbox" value="Se pone al día sin dificultad con tras una ausencia a clase. " onchange="updateText()">Se pone al día sin dificultad con tras una ausencia<br/>
                    <input type="checkbox" value="Es responsable y pregunta por el trabajo pendiente si no ha asistido a clase. " onchange="updateText()">Pregunta por el trabajo pendiente si no ha asistido a clase<br/>
                    </div>
                </td>
            </tr>
        </table>
    </div>

    <div class="group">
        <h3>Tareas, actividades, trabajos y proyectos</h3>
        <table>
            <tr>
                <td>
                    <div id="checkboxes3">
                    <b>Negativos</b><br/><br/>
                    <input type="checkbox" value="Tiene un trabajo por entregar. " onchange="updateText()">Tiene un trabajo por entregar<br/>
                    <input type="checkbox" value="Tiene algunos trabajos por presentar. " onchange="updateText()">Tiene algunos trabajos por presentar<br/>
                    <input type="checkbox" value="No realiza las actividades según las indicaciones. " onchange="updateText()">No realiza las actividades como se indica<br/>
                    <input type="checkbox" value="No cuida la presentación de actividades. " onchange="updateText()">No cuida la presentación de actividades<br/>
                    <input type="checkbox" value="No cumple con los plazos de entrega. " onchange="updateText()">No cumple con los plazos de entrega<br/>
                    <input type="checkbox" value="No dedica tiempo suficiente a los trabajos. " onchange="updateText()">No dedica tiempo suficiente a los trabajos<br/>
                    <input type="checkbox" value="No planifica bien la realización de trabajos. " onchange="updateText()">No planifica bien la realización de trabajos<br/>
                    </div>
                </td>
                <td>
                    <div id="checkboxes4">
                    <b>Positivos</b><br/><br/>
                    <input type="checkbox" value="Presenta todos las tareas, trabajos y proyectos. " onchange="updateText()">Presenta todos las tareas, trabajos y proyectos<br/>
                    <input type="checkbox" value="Presenta todos los trabajos. " onchange="updateText()">Presenta todos los trabajos<br/>
                    <input type="checkbox" value="Cumple con las indicaciones de los trabajos. " onchange="updateText()">Cumple con las indicaciones de los trabajos<br/>
                    <input type="checkbox" value="Cuida mucho la presentación de las actividades. " onchange="updateText()">Cuida mucho la presentación de las actividades<br/>
                    <input type="checkbox" value="Siempre entrega las tareas y trabajos en plazo. " onchange="updateText()">Siempre entrega las tareas y trabajos en plazo<br/>
                    <input type="checkbox" value="Las tareas y trabajos demuestran esfuerzo y dedicación. " onchange="updateText()">Las tareas y trabajos demuestran esfuerzo y dedicación<br/>
                    <input type="checkbox" value="Organiza muy bien la realización de trabajos. " onchange="updateText()">Organiza muy bien la realización de trabajos<br/>

                </div>
                </td>
            </tr>
        </table>
    </div>

    <div class="group">
        <h3>Trabajo en el aula</h3>

        <table id="ratingtable">
            <tr>
                <td>Comportamiento y actitud de trabajo</td>
                <td>
            <i class="rating_1 far fa-star"></i>
            <i class="rating_1 far fa-star"></i>
            <i class="rating_1 far fa-star"></i>
            <i class="rating_1 far fa-star"></i>
            <i class="rating_1 far fa-star"></i>
            <span id="rating_1" class="rate-comment"></span>
                </td>
            </tr>
            <tr>
                <td>Interés y motivación</td>
                <td>
            <i class="rating_2 far fa-star"></i>
            <i class="rating_2 far fa-star"></i>
            <i class="rating_2 far fa-star"></i>
            <i class="rating_2 far fa-star"></i>
            <i class="rating_2 far fa-star"></i>
            <span id="rating_2" class="rate-comment"></span>
        </td>
        </tr>
        <tr>
            <td>Participación e iniciativa</td>
            <td>
            <i class="rating_3 far fa-star"></i>
            <i class="rating_3 far fa-star"></i>
            <i class="rating_3 far fa-star"></i>
            <i class="rating_3 far fa-star"></i>
            <i class="rating_3 far fa-star"></i>
            <span id="rating_3" class="rate-comment"></span>
        </td>
        </tr>
        <tr>
            <td>Organización y responsabilidad</td>
            <td>
            <i class="rating_4 far fa-star"></i>
            <i class="rating_4 far fa-star"></i>
            <i class="rating_4 far fa-star"></i>
            <i class="rating_4 far fa-star"></i>
            <i class="rating_4 far fa-star"></i>
            <span id="rating_4" class="rate-comment"></span>
        </td>
        </tr>
        <tr>
            <td>Apuntes y material de clase</td>
            <td>
            <i class="rating_5 far fa-star"></i>
            <i class="rating_5 far fa-star"></i>
            <i class="rating_5 far fa-star"></i>
            <i class="rating_5 far fa-star"></i>
            <i class="rating_5 far fa-star"></i>
            <span id="rating_5" class="rate-comment"></span>
        </td>
        </tr>
        <tr>
            <td>Trabajo en equipo</td>
            <td>
            <i class="rating_6 far fa-star"></i>
            <i class="rating_6 far fa-star"></i>
            <i class="rating_6 far fa-star"></i>
            <i class="rating_6 far fa-star"></i>
            <i class="rating_6 far fa-star"></i>
            <span id="rating_6" class="rate-comment"></span>
        </td>
        </tr>
        <tr>
            <td>Convivencia y habilidades sociales</td>
            <td>
            <i class="rating_7 far fa-star"></i>
            <i class="rating_7 far fa-star"></i>
            <i class="rating_7 far fa-star"></i>
            <i class="rating_7 far fa-star"></i>
            <i class="rating_7 far fa-star"></i>
            <span id="rating_7" class="rate-comment"></span>
        </td>
        </tr>
        <tr>
            <td>Esfuerzo y dedicación</td>
            <td>
            <i class="rating_9 far fa-star"></i>
            <i class="rating_9 far fa-star"></i>
            <i class="rating_9 far fa-star"></i>
            <i class="rating_9 far fa-star"></i>
            <i class="rating_9 far fa-star"></i>
            <span id="rating_9" class="rate-comment"></span>
        </td>
        </tr>
        <tr>
            <td>Creatividad y pensamiento crítico</td>
            <td>
            <i class="rating_10 far fa-star"></i>
            <i class="rating_10 far fa-star"></i>
            <i class="rating_10 far fa-star"></i>
            <i class="rating_10 far fa-star"></i>
            <i class="rating_10 far fa-star"></i>
            <span id="rating_10" class="rate-comment"></span>
        </td>
        </tr>
        <tr>
            <td>Rendimiento general</td>
            <td>
            <i class="rating_8 far fa-star"></i>
            <i class="rating_8 far fa-star"></i>
            <i class="rating_8 far fa-star"></i>
            <i class="rating_8 far fa-star"></i>
            <i class="rating_8 far fa-star"></i>
            <span id="rating_8" class="rate-comment"></span>
        </td>
        </tr>
    </table>

    </div>

    <div class="group">
        <h3 id="h3-advise">Consejos y recomendaciones</h3>
        <table>
            <tr>
                <td>
                    <div id="checkboxes5">
                    <input type="checkbox" value="Debe dedicar más tiempo al estudio. " onchange="updateText()">Estudiar más<br/>
                    <input type="checkbox" value="Necesita mejorar la organización. " onchange="updateText()">Mejorar organización<br/>
                    <input type="checkbox" value="Debe planificar mejor su tiempo. " onchange="updateText()">Planificar su tiempo<br/>
                    <input type="checkbox" value="Debería prestar más atención en clase. " onchange="updateText()">Prestar más atención en clase<br/>
                    <input type="checkbox" value="Debería preguntar y participar más en el aula. " onchange="updateText()">Preguntar y participar más<br/>
                    <input type="checkbox" value="Debería ser más responsable con el trabajo. " onchange="updateText()">Ser más responsable con el trabajo<br/>
                    <input type="checkbox" value="Puede aprovechar mejor los recursos disponibles. " onchange="updateText()">Aprovechar mejor los recursos<br/>

                </div>
                </td>
                <td>
                    <div id="checkboxes6">
                    <input type="checkbox" value="Conviene que repase los contenidos. " onchange="updateText()">Repasar los contenidos<br/>
                    <input type="checkbox" value="Debería pedir ayuda cuanto la necesite. " onchange="updateText()">Pedir ayuda cuando la necesite<br/>
                    <input type="checkbox" value="Debería disponer de un buen ambiente de estudio. " onchange="updateText()">Disponer de un buen ambiente de estudio<br/>
                    <input type="checkbox" value="Debería descansar y divertirse. " onchange="updateText()">Descansar y divertirse<br/>
                    <input type="checkbox" value="Aconsejo cambiar algunas técnicas de estudio. " onchange="updateText()">Cambiar técnicas de estudio<br/>
                    <input type="checkbox" value="Podría establecer mejor sus prioridades de estudio. " onchange="updateText()">Establecer prioridades de estudio<br/>
                    <input type="checkbox" value="Es importante que sea más constante. " onchange="updateText()">Ser más constante<br/>

                </div>
                </td>
            </tr>
        </table>
    </div>

    <!--<div id="translated-div" class="group"></div>-->

    <div id="add-comment" class="obsbutton">Añadir observación a la lista</div>
    <div id="copy-button-2" class="obsbutton" onclick="countObs()">Copiar observación</div>
    
    <br/><br/>

    <div class="group">
        <ol id="students">
        </ol>
    </div>

    <button id="download">Descargar las observaciones</button>
    <br/>
    
</div> <!-- end content -->

    <div class="footer">&copy; Enrique Benimeli <a href="http://www.ebenimeli.org" target="_blank">www.ebenimeli.org</a> · 2023 · <span id="obsc"></span> · 
    Actualizado: 2023-03-07 20:40:26</div>
    <!-- Cmd + Shift + I -->

  