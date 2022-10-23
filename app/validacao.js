/* transformando o número em inteiro é só fazer isso "+chute" que jś faz, ou seja, é só tentar somar ele, vamos ferificar se 
o número é mesmo de fato um número, depois verifica se está fora do range, note que mostramos os valores das variáveis usando
template string `${}`*/ 
function verificaChuteSeEValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        // console.log("Valor inválido");
        elementoChute.innerHTML += `<div>Valor inválido</div>`;
    }

    if (numeroMaiorMenorQueOPermitido(numero)) {
        // console.log(`Valor inválido: o número secreto precisa está entre ${menorValor} e ${maiorValor}`);
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
    }

    // verifica se acertou o número secreto, se correto retiramos tudo o contúdo da tela e criamos um novo conteúdo lá
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Parabéns você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}