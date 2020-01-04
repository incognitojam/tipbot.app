const Discord = require("discord.js");
const service = require("../service");
const { Command, CommandManager } = require("./command");

const manager = new CommandManager("!").register(
  new Command("ping", async ({ message }) => {
    const response = await message.channel.send("Ping?");
    const latency = message.createdTimestamp - message.createdTimestamp;
    const apiLatency = Math.round(client.ping);

    response.edit(
      `Pong! Latency is ${latency}ms. API Latency is ${apiLatency}ms.`
    );
  })
);
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => manager.execute(message));

client.login(process.env.DISCORD_CLIENT_TOKEN);

service.get("/status", (req, res) => {
  res.send({
    status: client.status,
    tag: client.user ? client.user.tag : null
  });
});
