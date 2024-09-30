/*Titulo*/
var titulo            = document.querySelector(".titulo");
titulo.textContent    = "Dan Nutrição";
/*Fim Titulo*/

/*Pacientes*/
var pacientes         = document.querySelectorAll(".paciente");

for (var i = 0; i < 5; i++) {

  console.log(pacientes[i]);

  var tdPeso          = pacientes[i].querySelector(".info-peso");
  var peso            = tdPeso.textContent;

  var tdAlto          = pacientes[i].querySelector(".info-altura");
  var alto            = tdAlto.textContent;

  var tdImc           = pacientes[i].querySelector(".info-imc");

  var pesoVal         = true;
  var altoVal         = true;

  if (peso < 0 || peso > 600) {

    tdImc.textContent = "peso inválido";
    pesoVal           = false;
    pacientes[i].style.color = "Red";

  }

  if (alto < 0 || alto > 2.8) {

    tdImc.textContent = "altura inválida"
    altoVal           = false;

  }

  if (pesoVal && altoVal) {

    var imc           = peso / (alto * alto);
    tdImc.textContent = imc;

  }
}

var paciente          = document.querySelector("#primeiro-paciente");
/*Fim Paciente*/
