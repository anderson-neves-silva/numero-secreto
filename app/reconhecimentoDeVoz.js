//pegando o elemento chute
const elementoChute = document.getElementById('chute');

//aqui no início eu coloco window após a página aberta o reconhecimento de voz já fique ativo
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

//precisamos de uma instância para o funcionamento do reconhecimento de voz
const recognition = new SpeechRecognition();

//agora sim vamos iniciar o reconhecimento de voz, e para isso devemos configurar para a nossa lingua padrão português
recognition.lang = 'pt-Br';
recognition.start();

/*evento que axibe a mensagem no console, o comando abaixo significa, quando o reconhecimento de voz iniciar eu quero pegar
tudo que está em "result" e será criada uma função callback para que ela seja executada*/
recognition.addEventListener('result', onSpeak);

/*essa função "onSpeak" exibe tudo que falamos no console, aqui passamos um parâmetro "e" que é o evento, preciso pegar apenas o 
results e exibir no console, e para isso eu uso esse código "e.results[0][0].transcript", agora crio uma variável que armazena 
todo o elemento de fala o que mencionei antes, e chamo a função que exibe em tela passando o chute como parâmetro*/
function onSpeak(e) {
    chute = (e.results[0][0].transcript);
    //console.log(e.results[0][0].transcript);
    exibeChuteNaTela(chute);    
}

/*função que exibe o chute na tela, ela recebe o parâmetro chute, mostra em tela a mensagem falada, Obs. usamos o "$" para acessar
a variável chute, e aqui uso o sinal de crase*/
function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}