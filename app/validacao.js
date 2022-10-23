/* transformando o número em inteiro é só fazer isso "+chute" que jś faz, ou seja, é só tentar somar ele, vamos ferificar se 
o número é mesmo de fato um número, depois verifica se está fora do range, note que mostramos os valores das variáveis usando
template string `${}` */ 
function verificaChuteSeEValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        // console.log("Valor inválido");
        elementoChute.innerHTML += `<div>Valor inválido</div>`;
        // o return abaixo faz a função não ser mais invocada, e como se fosse o valor é inválido e não executa mais nada
        return
    }

    if (numeroMaiorMenorQueOPermitido(numero)) {
        // console.log(`Valor inválido: o número secreto precisa está entre ${menorValor} e ${maiorValor}`);
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
        // se o número for muito maior ou muito menor o return faz a função não fazer mais nada
        return
    }

    // verifica se acertou o número secreto, se correto retiramos tudo o contúdo da tela e criamos um novo conteúdo lá
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Parabéns você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `
    // a linha abaixo mostra uma mensagem na tela se o número secreto é maior ou menor
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}