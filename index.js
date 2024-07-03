const ID = '1258089881909985400'
const DiscordRPC = require('discord-rpc')
const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(ID);
async function activity() {
    if (!RPC) return;

    RPC.setActivity({
        details: 'Shqrawi',
        state: 'Turki',
        largeImageKey: '2',
        smallImageKey: '1',
        instance: false,
        startTimestamp: Date.now(),
        buttons: [
            {
                label: 'Check Out My Github!',
                url: 'https://github.com/ShQrawi'
            }
        ]
    })
}

RPC.on('ready', async () => {
    console.log("Tool Started.");
    activity();

    setInterval(() => {
        
    }, 10000000);
})

RPC.login({ clientId: ID})