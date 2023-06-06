var x = document.getElementById('nome'); 

window.onload =  function Carregar (){

    alert("Bem vindo a página do aluno!")

}
var count = 0; 
function Mudar () {
        if(count%2 == 0){
            x.style.color = 'red';
            count++;
        }  else if(count%5 == 0){
            x.style.color = 'gold';
            count++;
        } else {
            x.style.color = 'blue'
            count++; 
        }
       

}