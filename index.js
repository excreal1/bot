// index.js
require('dotenv').config();
const { Client, GatewayIntentBits, REST, Routes } = require('discord.js');
const { handleCommands } = require('./src/handleCommands');
const { handleEvents } = require('./src/handleEvents');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const TOKEN = process.env.DISCORD_TOKEN;
const GUILD_ID = process.env.GUILD_ID; // Get the guild ID from the .env file

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    // Register commands for the specific guild
    await registerCommands();
});

// Function to register commands
async function registerCommands() {
    const commands = [];
    
    // Load commands from the commands directory
    const commandDir = './src/commands';
    const commandFiles = require('fs').readdirSync(commandDir).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`${commandDir}/${file}`);
        commands.push(command.data.toJSON());
    }

    const rest = new REST({ version: '9' }).setToken(TOKEN);

    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(client.user.id, GUILD_ID),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
}

// Handle events
handleEvents(client);

// Handle commands
handleCommands(client);

client.login(TOKEN).catch(error => console.error('Failed to login:', error));
