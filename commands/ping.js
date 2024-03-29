const Discord = require("discord.js");

module.exports = {
  name: "ping",
  category: "General",
  description: "Bot's latency and ping.",
  aliases: ["latency"],
  cooldown: 5,
  sped: true,
  async execute(bot, message) {
    const loading = await message.channel.send(`Pinging...`);
    let pingEmbed = new Discord.MessageEmbed()
      .setThumbnail(bot.user.avatarURL())
      .setColor("BLUE")
      .setFooter("Requested by " + message.author.tag, message.author.avatarURL())
      .setAuthor(bot.user.username, bot.user.avatarURL())
      .setTimestamp()
      .addField(
        "Pong :ping_pong:",
        `Latency \`${loading.createdTimestamp -
          message.createdTimestamp}ms\`\nAPI Latency \`${Math.round(
          bot.ws.ping
        )}ms\``
      );
    loading.edit(pingEmbed);
  }
};
