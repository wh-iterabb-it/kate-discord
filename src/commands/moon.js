const { SlashCommandBuilder } = require("discord.js");
const { getMoonPhase } = require("../models/freeignorance");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("moon")
    .setDescription("Displays the current moon phase."),
  async execute(interaction) {
    await getMoonPhase().then(async (response) => {
      const json = response;
      const message = `${json.symbol} ${json.name}`;
      interaction.reply(message).catch((err) => console.error(err));
    });
  },
};
