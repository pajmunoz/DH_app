// window.onload = function () {
//     init();
//     doSomethingElse();
// };
var valForm = document.getElementById("dataVal");
var importeInput = document.getElementById("inputImporte");
var resultInputs = document.forms["results"].getElementsByTagName("input");
var selectProv = document.getElementById("inputProvincia");

var cuotaInput = document.getElementById("inputCuota");
var totalInput = document.getElementById("inputTotal");
var interesInput = document.getElementById("inputInteres");

function validate() {
    valForm.classList.add('was-validated');    
   
    totalInput.value = (importeInput.value * ("0." + interesInput.value)) + parseInt(importeInput.value);
    cuotaInput.value = totalInput.value / 12;

}
function clean() { 
    selectProv.value = "";
    valForm.classList.remove('was-validated');
    importeInput.value = "";
    for (var i = 0; i < resultInputs.length; i += 1) {
        resultInputs[i].value = "";
    }
}
