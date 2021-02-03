const EventEmitter = require('./event-emitter');

const emitter = new EventEmitter();

emitter.on('message', () => {
  console.log('incoming message!');
});

emitter.on('message', (args) => {
  console.log(args.sender, ':', args.content);
});

emitter.on('input', () => {
  console.log('on input!');
});

emitter.emit('message', { sender: 'sum tsui', content: 'how u doing' });
