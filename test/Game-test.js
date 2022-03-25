const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Game = require('../src/Game');
const data = require('../src/data')

describe('Game', function() {
  let card1
  let card2
  let card3
  let round
  let deck
  let game

  beforeEach(() => {
    card1 = new Card(1, 'Can you propagate a plant without a leaf if it has a node?', ['usually, yes', 'usually, no', 'only in water'], 'usually, yes');
    card2 = new Card(2, 'How often should you water your plants?', ['everyday', 'on a schedule', 'it depends'], 'it depends');
    card3 = new Card(3, 'Houseplants should always be planted in soil', ['yes!', 'no!'], 'no!');
    card4 = new Card(4, 'Houseplants can thrive in a low light environment', ['yes!', 'no!'], 'no!')
    deck = new Deck([card1,card2,card3])
    round = new Round(deck)
    game = new Game(deck);
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function')
  });

  it('should be an instance of Game',function () {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should be able to create cards', () => {
    game.createCards()

    expect(game.deck.cards[0].id).to.equal(1);
  });

  it('should be able to create a new deck at the start', () => {
    game.createCards();
    game.createDeck();


    expect(game.deck.cards[1].id).to.equal(2);
  });

  it('should create a new round', () => {
    game.start()

    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});
