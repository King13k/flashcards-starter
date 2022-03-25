const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

class Game {
  constructor(deck) {
    this.deck = deck;
    this.allCards = [];
  };

  start() {
    this.createCards()
    this.createDeck()
    const round = new Round(this.deck)
    this.currentRound = round
    this.printQuestion(round)
    this.printMessage(this.deck,this.currentRound)
    }

  createCards() {
    prototypeQuestions.forEach((card) => {
      this.allCards.push(new Card(card.id, card.question, card.answers, card.correctAnswer))
    });
  }

  createDeck() {
    this.deck = new Deck(this.allCards)
  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
};

module.exports = Game;
