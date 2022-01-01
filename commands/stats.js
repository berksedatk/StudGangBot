const Discord = require("discord.js");
const config = require("../config.json");

module.exports = {
  name: "stats",
  category: "General",
  description: "The status of the bot.",
  aliases: ["status","botinfo"],
  sped: true,
  cooldown: 5,
  async execute(bot, message, args) {
    const msg = await message.channel.send(`Just a moment...`);

    const totalSeconds = process.uptime();
    const realTotalSecs = Math.floor(totalSeconds % 60);
    const days = Math.floor((totalSeconds % 31536000) / 86400);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const mins = Math.floor((totalSeconds / 60) % 60);

    const embed = new Discord.MessageEmbed()
      .setAuthor(bot.user.username, bot.user.avatarURL(),'https://discord.gg/Se6tgufK25')
      .setColor("#cc0c0c")
      .setThumbnail(bot.user.avatarURL())
      .addField("Born On", bot.user.createdAt)
      .addField("Current Version", config.version, true)
      .addField("Servers", `${bot.guilds.cache.size} servers`, true)
      .addField("Channels", `${bot.channels.cache.size} channels`, true)
      .addField("Prefix", config.prefix)
      .addField(
        "Ping",
        `Latency \`${msg.createdTimestamp -
          message.createdTimestamp}ms\` | API Latency \`${Math.round(
          bot.ws.ping
        )}ms\``
      )
      .addField(
        "Uptime",
        `${days} days, ${hours} hours, ${mins} minutes, and ${realTotalSecs} seconds`
      )
      .setFooter("Created by: Sax#6211 and Pace#8720 with <3")
      .setTimestamp();
    msg.edit(embed);
  }
};
