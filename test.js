const { Client, GatewayIntentBits } = require('discord.js');
const { config } = require('dotenv');
const { execSync } = require('child_process');

// Load environment variables from .env file (optional)
config();

// Retrieve the Discord token from 1Password CLI
let discordToken;
try {
    discordToken = execSync('op get item "dev/discord token" --fields label=token', { encoding: 'utf-8' }).trim();
} catch (error) {
    console.error('Error retrieving Discord token:', error);
    process.exit(1);
}

// Initialize the Discord client
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

// Your existing code to log in and set up commands/events
client.login(discordToken)
    .then(() => console.log('Bot logged in!'))
    .catch(console.error);
