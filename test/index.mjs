import { execaCommand } from 'execa';
import { readFileSync } from 'fs';
import { expect } from 'chai';

// because the current addon is a "dependency of itself" we need to get the
// current version of this addon and replace it in the fixture files
const currentVersion = JSON.parse(readFileSync('./package.json')).version;

const csvFile = readFileSync('test/fixtures/csv.txt', 'utf8').replace(
  '$currentVersion',
  currentVersion
);
const jsonFile = readFileSync('test/fixtures/list.json', 'utf8').replace(
  '$currentVersion',
  currentVersion
);

describe('list-addons command', function () {
  it('works with no args', async function () {
    const { stdout } = await execaCommand('ember list-addons');

    expect(stdout).to.equal(csvFile);
  });

  it('works with --format=csv', async function () {
    const { stdout } = await execaCommand('ember list-addons --format=csv');

    expect(stdout).to.equal(csvFile);
  });

  it('works with --format=json', async function () {
    const { stdout } = await execaCommand('ember list-addons --format=json');

    expect(stdout).to.equal(jsonFile);
  });
});
