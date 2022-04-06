const fetchProduct = require('../async.js');

describe('Async', () => {
  it('async', (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Pool', price: 200 });
      done();
    })
  })
})
