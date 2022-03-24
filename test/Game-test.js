const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Game', function() {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function')
  });

  it('should be an instance of Game',function () {
    expect(round).to.be.an.instanceof(Game);
  });

  it('should keep track of current round', () => {
    expect(game.currentRound).to.equal(null);
  });

  it('should be able to create cards', () => {
    expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card);
  });

  it('should put cards in a deck', () => {
    game.start();

    expect(game.currentRound.deck).to.be.an.instanceof(Deck);
  });

  it('should create a new round', () => {
    game.start();

    expect(game.currentRound).to.be.an.instanceof(Round);
  });
})
