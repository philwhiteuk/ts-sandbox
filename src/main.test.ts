import { main } from './main';
import { expect } from 'chai';

describe('main', () => {
  it('should do nothing', async function() {
    expect(await main()).to.be.empty;
  });
});
