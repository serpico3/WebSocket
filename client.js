const websocket = require('ws');
const readLine = require('readline');

const ws = new websocket('ws://localhost:8080');

let nickname = '';  

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? ', (name) => {
    nickname = name;
});

ws.on('open', () => {
    console.log(nickname + 'Connected to server');
    rl.on('line', (line) => {
        ws.send(nickname + ': ' + line);
    });
});

ws.on('message', (message) => {
    console.log(message);
});