const Discord = require("discord.js");
const
module.exports = {
  name: "grab",
  category: "Fun",
  description: "Grabs a wallet",
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
    let wallet = bot.wallets.get(message.channel.id)
    if (!wallet) return message.channel.send(":x: | There is no wallet on the ground in this channel.")

    message.channel.send(`${message.author} grabbed the wallet in ${ms(Date.now() - wallet.time, { long:true })}!`)
    bot.wallets.delete(message.channel.id)
  }
};
