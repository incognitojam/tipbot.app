class CommandManager {
  commands = [];

  constructor(prefix) {
    this.prefix = prefix;
  }

  register(command) {
    this.commands.push(command);
    return this;
  }

  execute(message) {
    // Do not respond to messages from other bots (or from ourself).
    if (message.author.bot) {
      return false;
    }

    // Ignore any message which does not begin with the command prefix.
    if (message.content.indexOf(this.prefix) !== 0) {
      return false;
    }

    /*
     * Seperate the command from it's arguments, splitting them at the whitespace
     * characters.
     */
    const args = message.content
      .slice(this.prefix.length)
      .trim()
      .split(/ +/g);
    const label = args.shift().toLowerCase();

    // Search for command with name or alias matching label.
    const command = this.commands.find(
      command => command.name === label || command.aliases.includes(label)
    );

    // We couldn't find a command matching the given label.
    if (!command) {
      return false;
    }

    // Execute the matching command.
    command.fn({ args, label, message });
  }
}

module.exports = CommandManager;
