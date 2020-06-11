const Discord = require("discord.js");

module.exports = {
  name: "purge",
  category: "Moderation",
  description: "Purges the amount of messages you want(plus your message).",
  aliases: ["prune"],
  usage: "[range] [user(optional)]",
  cooldown: 10,
  guildOnly: true,
  reqPermissions: ["MANAGE_MESSAGES"],
  execute(bot, message, args) {
    const amount = Number(args[0]);
    const user = message.mentions.users.first() ? message.mentions.users.first() : false
    if (!args[0] || !amount) return message.channel.send(":x: | You must provide a number between 1 and 100.")
    if (amount > 101) return message.channel.send(":x: | The range must be between 1 and 100.");
    
    message.delete().then(() => {
      if (!user && !args[1]) {
      message.channel.bulkDelete(amount).then(messages => {
        message.channel.send(`Done! Cleaned \`${amount}\` messages for you!`).then(msg => msg.delete({timeout: 5000}))
      });
    } else if (user) {
      message.channel.messages.fetch({ limit: 100 }).then(messages => {
        messages = messages.filter(m => m.author.id === user.id).array().slice(0, amount);
        message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
        message.channel.send(`Done! Cleaned \`${amount}\` messages of ${user.tag} for you!`).then(msg => msg.delete({timeout: 5000}))
      });     
    } else if (args[1]) {
      message.channel.messages.fetch({ limit: 100 }).then(messages => {
        messages = messages.filter(m => m.content.toLowerCase().includes(args[1].toLowerCase())).array().slice(0, amount);
        message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
        message.channel.send(`Done! Cleaned \`${amount}\` messages that include \`${args[1]}\` for you!`).then(msg => msg.delete({timeout: 5000}))
      });
    }
    })    
  }
};
