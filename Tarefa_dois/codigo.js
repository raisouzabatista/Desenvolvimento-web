
function Converter (){
const numero = Number(document.getElementById("label").value)
const opcao = document.getElementById("opcao").value

var multiplicado

switch(opcao){
  case "0": 
  multiplicado = (numero * 1000)
  window.alert(numero + " em milímetros dá: "+ multiplicado)
  break; 
  case "1": 
  multiplicado = (numero * 100)
  window.alert(numero + " em centímetro dá: "+ multiplicado)
  case "2": 
  multiplicado = (numero * 10)
  window.alert(numero + " em decímetro dá: "+ multiplicado)
  break; 
  case "3": 
  multiplicado = (numero  /100)
  window.alert(numero + " em hectômetro dá: "+ multiplicado)
  break;
  case "4": 
  multiplicado = (numero  /1000)
  window.alert(numero + " em quilômetro dá: "+ multiplicado)
  break; 
  default: 
  multiplicado = "não encontrado"
  window.alert(multiplicado)
  break;
}

}





