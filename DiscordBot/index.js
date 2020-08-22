const {Client,MessageEmbed} = require('discord.js');

const client = new Client();

client.on('ready',()=>{
    console.log(`Bot is ready as ${client.user.tag}!`);
    client.user.setStatus('dnd');
    console.log(client.user.presence.status);

    const BotChannel = client.channels.cache.find(channel => channel.name === "bot_test");

    console.log(BotChannel.name);
})

client.on('message', async message =>{
    //Recibiendo el mensaje
    console.log(message.content);
    if(message.content === "ping"){
        message.reply('pong');
    }

    if(message.content === "Hello"){
        message.channel.send(`Hello, ${message.author}`);
    }

    if(message.content.includes("!test")){
        message.channel.send('Glad your are testing');
    }

    if(message.content === "!Youtube"){
        message.channel.send("https://www.youtube.com/watch?v=O6LkYkBKu30&list=RDO6LkYkBKu30&start_radio=1")
    }

    if(message.content === "!Pretty"){
        const embed = new MessageEmbed()
            .setTitle('A slick little embed')
            .setColor(0xff0000)
            .setDescription('Hello, this is a slick embed!')
            .setAuthor("ngch43","https://www.publico.es/uploads/2019/02/12/5c6306414e254.jpg")
            .addField('Some thing','Lorem ipsum');
        message.channel.send(embed);
    }

    if(message.content === "!Clear"){
        const fetched = await message.channel.messages.fetch({ limit: 100 });
        message.channel.bulkDelete(fetched);
        
    }

})

client.login('NzQ2Njg1NDA1MzU2NjIxODU1.X0D6-Q.72VWBFBrKOZnxznNYwSWeo3YGoM');

