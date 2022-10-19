/*atalho do console.log "cl"*/

/*variáveis que guarda o menor e maior valor */
const menorValor = 1;
const maiorValor = 1000;
/*variável que recebe um número secreto gerado pela função */
const numeroSecreto = gerarNumeroAleatorio();

/*função que gera o número secreto, aqui colocamos a variável de "maiorValor + 1" para que ela seja inclusiva*/
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log("Número secreto:", numeroSecreto);

/*variáveis que guarda os valores dos elementos da tela e altera os valores delas para os valores das variáveis 
"menorValor e maiorValor"*/
const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;
const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;