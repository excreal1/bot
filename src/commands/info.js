// src/commands/info.js
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Displays information about the bot.'),
    async execute(interaction) {
        await interaction.reply('I am a bot created to assist you!');
    },
};
