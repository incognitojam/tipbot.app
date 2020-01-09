const Discord = require("discord.js");
const { app } = require("node-template");
const { Command, CommandManager } = require("./command");

/*
 * Create a new CommandManager instance and register our commands.
 */
const manager = new CommandManager("!")
  // ? Ping command
  .register(
    new Command("ping", async ({ message }) => {
      const response = await message.channel.send("Ping?");
      const latency = message.createdTimestamp - message.createdTimestamp;
      const apiLatency = Math.round(client.ping);

      response.edit(
        `Pong! Latency is ${latency}ms. API Latency is ${apiLatency}ms.`
      );
    })
  )
  // ? Help command
  .register(
    new Command("help", async ({ message }) => {
      message.channel.send("TODO");
    })
  );

/*
 * Create a new Discord client and setup the event listeners.
 */
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
  // When a new message is received send it to the command manager to process.
  manager.execute(message);

  // TODO: log messages
});

// Login to the Discord API.
client.login(process.env.DISCORD_CLIENT_TOKEN);

// TODO: define more endpoints
app.get("/status", (req, res) => {
  // Send the discord client status and the user tag in the response.
  res.send({
    status: parseStatus(client.status),
    tag: client.user ? client.user.tag : null,
    apiLatency: Math.round(client.ping)
  });
});

const parseStatus = clientStatus => {
  switch (clientStatus) {
    case 0:
      return "Ready";
    case 1:
      return "Connecting";
    case 2:
      return "Reconnecting";
    case 3:
      return "Idle";
    case 4:
      return "Nearly";
    case 5:
      return "Disconnected";
    default:
      return "Unknown";
  }
};
