const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
});

client.on("message", (message) => {
  if (message.content === 'ping') {
    message.reply('pong');
  } else
  if (message.content.startsWith(prefix + "hola")) {
    message.channel.send("Hola que tal?");
    }
});

client.login(process.env.BOT_TOKEN);

