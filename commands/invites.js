const Discord = require("discord.js");

module.exports = {
  name: "invites",
  category: "Utility",
  description: "Shows the invite chart.",
  guildOnly: true,
  execute(bot, message, args) {
    bot.guilds.cache
      .get("548949555597803550")
      .fetchInvites()
      .then(invites => {
        let promo = 0;
        promo += invites.get("Xr4hTYs").uses;
        let insta = 0;
        insta += invites.get("6CP8HBD").uses;
        insta += invites.get("N45YtP6").uses;
        insta += invites.get("XwkuM2Y").uses;
        insta += invites.get("hAwFNS7").uses;
        insta += invites.get("upq7QGe").uses;
        insta += invites.get("upq7QGe").uses;
        insta += invites.get("parBhbwcbF").uses;
        insta += invites.get("YyhkTRX6rf").uses;
        sendInviteEmbed(promo, insta);
      });

    function sendInviteEmbed(promo, insta) {
      const inviteEmbed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor("#cc0c0c")
        .setDescription(
          `**- :partying_face: Partnership Invites -** \n\n:small_red_triangle:  Uses: ${promo} \n\n**- :white_check_mark: Insta Promo Invites -** \n\n:small_red_triangle:  Uses: ${insta}`
        )
        .setFooter(
          "Requested by " + message.author.tag,
          message.author.avatarURL()
        );
      message.channel.send(inviteEmbed);
    }
  }
};
