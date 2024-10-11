var titulo              = document.querySelector(".titulo");
titulo.textContent      = "Hyêsa Nutrição";

var pacientes           = document.querySelectorAll(".paciente");

for(var i = 0; i < 5; i++) {

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
    pacientes[i].classList.add("dados-invalidos");

  }

  if (altura < 0 || altura > 2.80){

    tdImc.textContent   = "Altura inválida!"
    altoVal             = false;
    pacientes[i].classList.add("dados-invalidos");

  }

  if(pesoEhValido && alturaEhValida){

    var imc             = peso / (alto * alto);
    tdImc.textContent   = imc.toFixed(2);

  }
}

var botaoAdicionar      = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){

  event.preventDeFault();

  var form              = document.querySelector("#form-adiciona");

  var nome              = form.nome.value;
  var peso              = form.peso.value
  var alrura            = form.altura.value
  var percentual        = form.percentual.value

});
