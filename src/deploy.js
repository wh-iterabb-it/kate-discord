const fs = require('fs');
const path = require('path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { clientId, guildList, token } = require('./config.json');
const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}


const rest = new REST({ version: '10' }).setToken(token);
for(const id of guildList) {
	rest.put(Routes.applicationGuildCommands(clientId, id), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
}
