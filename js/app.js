window.onload = function () {
    validar();
};
var valForm = document.getElementById("dataVal");
var importeInput = document.getElementById("inputImporte");
var resultInputs = document.forms["results"].getElementsByTagName("input");
var selectProv = document.getElementById("inputProvincia");

var cuotaInput = document.getElementById("inputCuota");
var totalInput = document.getElementById("inputTotal");
var interesInput = document.getElementById("inputInteres");
document.getElementById("inputProvincia").value = "";


function validar(){
    if (importeInput.value === "") {
        document.getElementById("btnCalc").setAttribute("disabled", "");
        document.getElementById("btnDel").setAttribute("disabled", "");
        
    } else if (selectProv.value === "") {
        document.getElementById("btnCalc").setAttribute("disabled", "");

    } 
    else {
        document.getElementById("btnCalc").removeAttribute("disabled", "");
        document.getElementById("btnDel").removeAttribute("disabled", "");
    }
}


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

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}