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

//TROCAR IMAGEM

var imagens = ["./robotron/robotron-azul.png", "./robotron/robotron-vermelho.png", "./robotron/robotron-rosa.png", "./robotron/robotron-amarelo.png", "./robotron/robotron-branco.png", "./robotron/robotron-preto.png"];
var contador = 0;

function exibirImagem() {
    var imagem = document.getElementById("imagem");
    imagem.src = imagens[contador];
}

function next() {
    contador++;
    if (contador >= imagens.length) {
        contador = 0; // Voltar ao início se chegarmos ao final das imagens.
    }
    exibirImagem();
}

function previous() {
    contador--;
    if (contador < 0) {
        contador = imagens.length - 1; // Voltar ao final se estivermos no início das imagens.
    }
    exibirImagem();
}

//