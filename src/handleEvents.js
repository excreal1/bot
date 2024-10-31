// src/handleEvents.js
module.exports.handleEvents = (client) => {
    client.on('messageCreate', (message) => {
        // Example event handling (you can add more events as needed)
        if (message.author.bot) return;
        console.log(`Message from ${message.author.tag}: ${message.content}`);
    });
};
