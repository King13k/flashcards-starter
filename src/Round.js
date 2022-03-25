const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = deck.cards[0];
    this.currentTurn;
  }

  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.currentCard)
    if (!this.currentTurn.evaluateGuess() === true) {
      this.incorrectGuesses.push(this.currentCard)
    }
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];

  return  this.currentTurn.giveFeedBack();
    // console.log('<<>>>',this.currentTurn.giveFeedBack())
  };


  calculatePercentCorrect() {
    return (this.turns - this.incorrectGuesses.length) / this.turns;
  };

  endRound() {
    console.log(`** You answered ${this.calculatePercentCorrect() * 100}% of the questions correctly!`)
    return `** You answered ${this.calculatePercentCorrect() * 100}% of the questions correctly!`
  };

}

module.exports = Round;
