import { execaCommand } from 'execa';
import { readFileSync } from 'fs';
import { expect } from 'chai';

const csvFile = readFileSync('test/fixtures/csv.txt', 'utf8');
const jsonFile = readFileSync('test/fixtures/list.json', 'utf8');

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
