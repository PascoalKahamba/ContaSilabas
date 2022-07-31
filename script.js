let $ = document.querySelector.bind(document);
let palavraDigitada = $("#txt-palavra");
let solucao = $(".solucao");
let butao = $("#butao");
let cont;
let vogais = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

function mostraSilaba() {
  if (palavraDigitada.value.length == 0) {
    alert("Campo vazio por favor digite a palavra!");
  } else {
    somaSilaba();
  }
}
function somaSilaba() {
  cont = 0;
  for (let conta = 0; conta <= palavraDigitada.value.length; conta++) {
    if (vogais.includes(palavraDigitada.value[conta]) === true) {
      cont++;
    }
  }
  resulSilaba();
}
function resulSilaba() {
  solucao.style.visibility = "visible";
  solucao.innerHTML = `A palavra ${palavraDigitada.value} <strong class='negrito'>tem ${cont} silabas.</strong>`;
}

butao.addEventListener("click", mostraSilaba);
