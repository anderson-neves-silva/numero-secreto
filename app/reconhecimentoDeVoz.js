//aqui no início eu coloco window para que quando a página for aberta o reconhecimento de voz fique ativo
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

//precisamos de uma instância para o funcionamento
const recognition = new SpeechRecognition();

//agora sim vamos iniciar o reconhecimento de voz, e para isso precisamos configurar para a nossa lingua padrão português
recognition.lang = 'pt-Br';
recognition.start();

/*evento que axibe a mensagem no console, o comando abaixo significa quando o reconhecimento de voz iniciar eu quero pegar
tudo que está em "result" e será criada uma função callback para que ela seja executada*/
recognition.addEventListener('result', onSpeak)

/*essa função "onSpeak" exibe tudo que falamos no console, aqui passamos um parâmetro que é o evento, preciso pegar apenas o 
result e exibir no console e para isso uso esse código "e.results[0][0].transcript"*/
function onSpeak(e) {
    console.log(e.results[0][0].transcript);
}