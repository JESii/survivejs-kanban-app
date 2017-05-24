import assert from 'assert';
import App from '../app/components/App.jsx';

describe('add', function() {
  it('adds', function() {
    expect(1 + 1).toEqual(2);
    // assert.equal(1 + 1, 2);
  });
});

describe('app', () => {
  it('exists', () => {
    expect(App).toBeDefined();
  })
});7
