const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
require("dotenv").config();

const commands = [
        new SlashCommandBuilder().setName('hello').setDescription('Replies with pong!'),
    ]
    .map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

rest.put(Routes.applicationGuildCommands(process.env.CLIENTID, process.env.GUILDID), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);