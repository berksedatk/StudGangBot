const Discord = require('discord.js')

module.exports = {
  name: "sage",
  category: "Fun",
  description: "Noodle's adorable husky named Sage! :) She is so adorable!",
  unstaged: true,
  cooldown: 5,
  sped: true,
  exchannels: [
    {id: "548949556210040862", cooldown: 20}
  ],
  execute(bot, message, args) {
    const list = [
      "https://cdn.discordapp.com/attachments/661172663334731796/707158440761360504/Snapchat-94637175.jpg",
"https://cdn.discordapp.com/attachments/661172663334731796/707158795922571314/Snapchat-919376668.jpg",
"https://cdn.discordapp.com/attachments/661172663334731796/707158796161515571/Snapchat-466806859.jpg",
"https://cdn.discordapp.com/attachments/661172663334731796/707158796476219412/Snapchat-1380345012.jpg",
"https://cdn.discordapp.com/attachments/661172663334731796/707159008355811348/Snapchat-1279675300.jpg",
"https://cdn.discordapp.com/attachments/661172663334731796/707159504600563772/20200119_132143.jpg",
"https://cdn.discordapp.com/attachments/661172663334731796/707159819966218311/20190618_190357.jpg",
"https://cdn.discordapp.com/attachments/661172663334731796/707160028188246046/20190610_115959.jpg",
"https://cdn.discordapp.com/attachments/661172663334731796/707160515255861248/20190605_001033.jpg",
"https://cdn.discordapp.com/attachments/661172663334731796/707161576704180264/20180306_162255.jpg",
"https://cdn.discordapp.com/attachments/661172663334731796/707162507541872701/20181028_1318410.jpg",
"https://cdn.discordapp.com/attachments/661172663334731796/707163032371068990/20180817_194810.jpg",
"https://cdn.discordapp.com/attachments/661172663334731796/707163173983092776/20180727_050921.jpg",
"https://cdn.discordapp.com/attachments/661172663334731796/707163899467661383/20200117_225946.jpg",
"https://cdn.discordapp.com/attachments/661172663334731796/707164560200826970/20190104_031905.jpg",
"https://cdn.discordapp.com/attachments/661172663334731796/707164677943328808/JPEG_20200303_171713.jpg",
"https://cdn.discordapp.com/attachments/661172663334731796/707164825217925271/20200206_082810.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707468717918912563/20200126_162512.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707468804078174289/20200119_135652.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707468877248069693/20200119_135638.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707468933938282546/20200119_135429.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707469113370345478/20200119_135231.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707469271881482240/20200119_132049.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707469440589103164/20200119_132143.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707469507869802496/20200118_105415.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707469603881877544/20200119_131312.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707469652355448882/20200119_131221.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707469724115795998/20200117_225942.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707469831653556284/20200117_225946.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707470298168950784/20191229_121935.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707470463009423410/20191224_150117.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707470531674505236/20191215_190605.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707470622388650044/20191215_190702.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707470766303739954/20191210_195003.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707470859945639936/20191202_214347.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707470978837512282/20191116_133303.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707471134618288169/20191116_133557.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707471237684920340/20190724_153953.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707471367116947487/20190618_190310.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707475710565941288/unknown.png",
"https://cdn.discordapp.com/attachments/705969457180180550/707471679978209301/20190610_115948.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707471781438685184/20190610_120008.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707471862485221376/20190610_120024.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707471918605008966/20190610_120025.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707472025006112859/20190610_120028.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707472147748225074/20190605_000516.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707472405882339328/20190302_133800.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707472541723262996/20190302_133743.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707472721096736859/20181223_201104.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707472974571241483/20181028_1612051.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707473570783297556/20181028_161159.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707473757287219240/20181028_131842.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707473964498157608/20181028_1318411.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707474080122798080/20181028_1318410.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707474130374492171/20180815_173648.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707474198661955644/20180306_162255.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707474357848375296/20180306_162306.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707474422310764544/20180306_162313.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707474428728049674/Snapchat-498759149.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707474435157917727/Snapchat-466806859.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707474445480230983/Snapchat-919376668.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707474453398945883/Snapchat-1493505378.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707474461779296276/Snapchat-143270852.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707474472256536586/Snapchat-591264617.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707474487951753226/Snapchat-1844170236.jpg",
"https://cdn.discordapp.com/attachments/705969457180180550/707474496608665641/Snapchat-918567.jpg"
    ]
      
    const slapEmbed = new Discord.MessageEmbed()
    .setDescription(`Noodle's Lil Cute Husky named Sage. ;3`)
    .setImage(list[Math.floor(Math.random() * list.length)])
    .setColor('ff82ab')
    message.channel.send(slapEmbed)
  }
};
