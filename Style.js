const Discord = require("discord.js");
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const Mahmoud= member.guild.channels.get("512674548382957573");
if(!Mahmoud) return;
if(Mahmoud) {
setTimeout(() => Mahmoud.send(`**Welcome To __ # - Mal Shop :rose: :heart: __ **`), 4000)        
}
});

client.on('guildMemberAdd', member => {
const Mahmoud= member.guild.channels.get("513381450448371712");
if(!Mahmoud) return;
if(Mahmoud) {
setTimeout(() => Mahmoud.send(`**Welcome To __ # - Malicious™ <#519923132128165928> <#519935348823031808> :rose: :fire:  __ **`), 4000)        
}
});

client.on('guildMemberAdd', member => {
const Mahmoud= member.guild.channels.get("516323087978070016");
if(!Mahmoud) return;
if(Mahmoud) {
setTimeout(() => Mahmoud.send(`**Welcome To __ # - Marley STORE :rose: :heart: __ **`), 4000)        
}
});






   
client.login(process.env.BOT_TOKEN);
