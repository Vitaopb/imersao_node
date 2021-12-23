const EventEmmiter = require('events')
class MeuEmissor extends EventEmmiter {

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'
meuEmissor.on(nomeEvento, function (click) {
  console.log('usuario clicou');
})

const stdin = process.openStdin()
stdin.addListener('data', (value) => {
  console.log(`Você digitou: ${value.toString()}`);
})