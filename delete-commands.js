const { REST } = require("@discordjs/rest");
const { Routes } = require("discord.js");
require("dotenv").config();

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

// for guild-based commands
rest
    .put(
        Routes.applicationGuildCommands(process.env.CLIENTID, process.env.GUILDID), {
            body: [],
        }
    )
    .then(() => console.log("Successfully deleted all guild commands."))
    .catch(console.error);