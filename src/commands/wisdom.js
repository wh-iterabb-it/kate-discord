const { SlashCommandBuilder } = require("discord.js");
const { getFortune } = require("../models/freeignorance");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("wisdom")
    .setDescription("Get a little wisdom."),
  async execute(interaction) {
    await getFortune().then(async (response) => {
      const message = `${response}`;
      return interaction.reply(message);
    });
    return;
  },
};
