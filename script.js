//SEPRAR O NOME

function separete(){
    let inputvalue = document.getElementById("fname").value;
    //separa os valores
    let divide = inputvalue.split(" ")
    //
    let name = document.getElementById("name");
    let sname = document.getElementById("sname");
    //pega os valores separados na 1 e na 2 posição e substitui os valores do campo de nome e sobrenome
    name.value = divide[0]; 
    sname.value = divide[1]; 
}
//

//CALCULAR IMC

function calculateimc(){
    let nome = document.getElementById("nome").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let text = document.getElementById("text")
    let calcular = peso / (altura * altura)
    text.value = `Olá, ${nome}. o seu IMC é de: ${calcular.toFixed(2)}.`
}
//
