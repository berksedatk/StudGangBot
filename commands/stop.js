const Discord = require("discord.js");

module.exports = {
  name: "stop",
  category: "Utility",
  description: "Stops the music",
  aliases: ["fuckoff"],
  cooldown: 5,
  execute(bot, message, args) {
    const serverQueue = bot.queue.get(message.guild.id);
    if (message.member.voice.channel == serverQueue.voiceChannel) return message.channel.send("You have to be in the same voice channel to stop the music!");
    if (!serverQueue) return message.channel.send("There is no song that I could end!");
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
  }
};
