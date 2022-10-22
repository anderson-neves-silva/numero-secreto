/* transformando o número em inteiro é só fazer isso "+chute" que jś faz, ou seja, é só tentar somar ele, vamos ferificar se 
o número é mesmo de fato um número, depois verifica se está fora do range, note que mostramos os valores das variáveis usando
template string `${}`*/ 
function verificaChuteSeEValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        console.log("Valor inválido");
    }

    if (numeroMaiorMenorQueOPermitido(numero)) {
        console.log(`Valor inválido: o número secreto precisa está entre ${menorValor} e ${maiorValor}`);
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}