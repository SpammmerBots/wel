const Discord = require("discord.js");
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const Mahmoud= member.guild.channels.get("566699958128869417");
if(!Mahmoud) return;
if(Mahmoud) {
setTimeout(() => Mahmoud.send(`**<@${member.user.id}> __ # Welcome To Malicious <#566694004519993355> Prove YourSelf :cloud_lightning: :cloud_lightning: :cloud_lightning:  __ **`), 4000)        
}
});










   
client.login(process.env.BOT_TOKEN);
