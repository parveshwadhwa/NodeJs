const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(
    "MTIxNTYzNjgyMTQwNTYwNTkwOA.GlfF0h._3Rl8_orZT3GKlB_Q_zKYs5uACu_GXDu2AlBOo"
);


(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationCommands("1215636821405605908"), { body: commands });
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
    console.error(error);
    }
})();