const websocket = require('ws');

const wss = new websocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(`${message}`);
    });
    ws.on('message', (message) => {
        wss.clients.forEach((client) => {
            if (client === ws) {
                return;
            }
            client.send(message);
        });
    });
});
