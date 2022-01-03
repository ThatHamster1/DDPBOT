const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "DDP is funny"){
        message.reply("Yeah, we all know that :rolling_eyes:")
    }
})

client.login(process.env.TOKEN)