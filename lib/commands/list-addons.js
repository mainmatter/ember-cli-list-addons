'use strict';

function traverseAddonVersions(addons, versions) {
  for (const addon of addons) {
    if (addon.pkg.version) {
      const addonDependents =
        versions[addon.pkg.name] || (versions[addon.pkg.name] = []);

      if (!addonDependents.includes(addon.pkg.version)) {
        addonDependents.push(addon.pkg.version);
      }
    }

    traverseAddonVersions(addon.addons || [], versions);
  }
}

module.exports = {
  name: 'list-addons',
  description: 'lists all addons used.',
  aliases: ['la'],
  works: 'insideProject',

  availableOptions: [
    {
      name: 'format',
      type: String,
      default: 'csv',
      description:
        'Allows you to alter the format that is printed to the stdout. Available options: csv, json',
    },
  ],

  run(commandOptions) {
    const versions = {};
    traverseAddonVersions(this.project.addons, versions);

    if (commandOptions.format === 'csv') {
      for (let pak in versions) {
        this.ui.writeLine(`${pak},${versions[pak].join(',')}`);
      }
    } else if (commandOptions.format === 'json') {
      console.log(JSON.stringify(versions, null, 2));
    }

    return;
  },
};
