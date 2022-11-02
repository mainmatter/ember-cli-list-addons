'use strict';

module.exports = {
  name: require('./package').name,
  includedCommands() {
    return {
      'list-addons': require('./lib/commands/list-addons'),
    };
  },
};
