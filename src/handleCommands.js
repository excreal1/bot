// src/handleCommands.js
const fs = require('fs');
const path = require('path');

const commandDir = path.join(__dirname, 'commands');

module.exports.handleCommands = (client) => {
    const commands = new Map();

    // Load commands from the commands directory
    fs.readdirSync(commandDir).forEach(file => {
        const command = require(path.join(commandDir, file));
        commands.set(command.data.name, command);
    });

    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isCommand()) return;

        const command = commands.get(interaction.commandName);
        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    });
};
