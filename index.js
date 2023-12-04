const fs = require("node:fs");
const path = require("node:path");
const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client({
    intents: 8,
});

// add the specific commands
client.commands = new Discord.Collection();
const commandPath = path.join(__dirname, "commands");
const commandFiles = fs
    .readdirSync(commandPath)
    .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
    console.log('inside the for loop => ', file)
    const filePath = path.join(commandPath, file);
    const command = require(filePath);
    console.log(command);
    client.commands.set(command.data.name, command);
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

// const player = new Player(client);

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

client.login(process.env.TOKEN);