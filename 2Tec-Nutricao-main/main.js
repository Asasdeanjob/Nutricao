var titulo              = document.querySelector(".titulo");
titulo.textContent      = "Dan Nutrição";

var pacientes           = document.querySelectorAll(".paciente");

for(var i = 0; i < 5; i++) {

  console.log(pacientes[i]);

  var tdPeso            = pacientes[i].querySelector(".info-peso");
  var peso              = tdPeso.textContent;

  var tdAlto            = pacientes[i].querySelector(".info-altura");
  var alto              = tdAlto.textContent;

  var tdImc             = pacientes[i].querySelector(".info-imc");

  var pesoVal           = true;
  var altoVal           = true;

  if(peso < 0 || peso > 600) {

    tdImc.textContent   = "Peso inválido!";
    pesoVal             = false;

  }

  if(alto < 0 || alto > 2.80){

    tdImc.textContent   = "Altura inválida!"
    altoVal             = false;

  }

  if(pesoVal && altoVal){

    var imc             = peso / (alto * alto);
    tdImc.textContent   = imc.toFixed(2);

  }
}
