const ID = '1258089881909985400'
const DiscordRPC = require('discord-rpc')
const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(ID);
async function activity() {
    if (!RPC) return;

    RPC.setActivity({
        details: 'CUSTOM DETAILs',
        state: 'CUSTOM STATE',
        largeImageKey: 'IMAGE',
        smallImageKey: 'IMAGE',
        instance: false,
        startTimestamp: Date.now(),
        buttons: [
            {
                label: 'BUTTON',
                url: 'BUTTON URL'
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
