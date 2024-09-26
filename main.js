var titulo          = document.querySelector(".titulo");

titulo.textContent  = "Dan Nutrição";

var paciente        = document.querySelector("#primeiro-paciente");
var tdPeso          = paciente.querySelector(".info-peso");
var peso            = tdPeso.textContent;

var tdAlto          = paciente.querySelector(".info-altura");
var alto            = tdAlto.textContent;

var tdImc = paciente.querySelector(".info-imc");
var imc = peso / (alto * alto);

tdImc.textContent = imc;

if (peso < 0) {
  tdImc.textContent = "peso inválido";
}

