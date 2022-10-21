/*aqui no início eu coloco window para que quando a página for aberta o reconhecimento de voz fique ativo*/
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

/*precisamos de uma instância para o funcionamento*/
const recognition = new SpeechRecognition();

//agora sim vamos iniciar o reconhecimento de voz, e para isso precisamos configurar para a nossa lingua padrão português
recognition.lang = 'pt-Br';
recognition.start();
