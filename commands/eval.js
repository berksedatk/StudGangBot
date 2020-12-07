const fs = require("fs");
const Discord = require("discord.js");
const config = require("../config.json");
const { inspect } = require("util");
const hastebin = require("hastebin-gen");

module.exports = {
  name: "eval",
  category: "Utility",
  description: "Executes a command. DEV ONLY.",
  aliases: ["eveal", "execute"],
  usage: "[code]",
  dev: "true",
  sped: true,
  async execute(bot, message, args) {
    const msg = await message.channel.send(`Executing code...`);

    const code = args.join(" ");
    
    try {
      let output = eval(code);
      if (
        output instanceof Promise ||
        (Boolean(output) &&
          typeof output.then === "function" &&
          typeof output.catch === "function")
      )
        output = await output;
      output = inspect(output, {
        depth: 0,
        maxArrayLength: null
      });
      output = clean(output);
      if (output.includes(process.env.BOT_TOKEN))
        return message.channel.send("Not today!");
      if (output.length < 1000) {
        const embed = new Discord.MessageEmbed()
          .addField("Input", `\`\`\`js\n${code}\`\`\``)
          .addField("Output", `\`\`\`js\n${output}\`\`\``)
          .setColor("#f9f9f9");
        msg.edit(embed);
      } else {
        hastebin(output, { extention: 'txt' }).then(code => {
        const embed = new Discord.MessageEmbed()
          .setTitle("Output was too long, uploaded to hastebin and logged to console!")
          .setURL(code)
          .setColor("#f9f9f9");
          msg.edit(embed);
        });
      }
    } catch (e) {
      message.channel.send(`Error \`\`\`js\n${e}\`\`\``);
    }
  }
};

function clean(text) {
  return text
    .replace(/`/g, "`" + String.fromCharCode(8203))
    .replace(/@/g, "@" + String.fromCharCode(8203));
}
