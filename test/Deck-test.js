const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck')
const Card = require('../src/Card')

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function')
  });

  it('should be an instance of Deck',function () {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be able to store cards',function () {

  card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  card2 = new Card(2, 'How often should you water your plants?', ['everyday', 'on a schedule', 'it depends'], 'it depends');
  card3 = new Card(3, 'Houseplants should always be planted in soil', ['yes!', 'no!'], 'no!');


  const deck = new Deck([card1, card2, card3]);

expect(deck.countCards()).to.equal(3);
});

});
