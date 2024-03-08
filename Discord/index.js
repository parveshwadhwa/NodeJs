const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] }); //intent meaning that which type of information u give to user

client.on('messageCreate', (message) => {
    console.log(message.content);
    if(message.author.bot) return;
    message.reply({
        content: "Hii from bot"
    })
});

client.on('interactionCreate', (interaction) => {
    console.log(interaction);
    interaction.reply("pong");
})

client.login(
    "MTIxNTYzNjgyMTQwNTYwNTkwOA.GlfF0h._3Rl8_orZT3GKlB_Q_zKYs5uACu_GXDu2AlBOo"
)
