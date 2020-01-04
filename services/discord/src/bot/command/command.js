class Command {
  aliases = [];
  privileged = false;

  constructor(name, fn) {
    this.name = name;
    this.fn = fn;
  }

  setAliases(aliases) {
    this.aliases = aliases;
    return this;
  }

  setPrivileged(privileged) {
    this.privileged = privileged;
    return this;
  }
}

module.exports = Command;
