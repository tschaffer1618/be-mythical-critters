class Sphinx {
  constructor() {
    this.name = null;
    this.riddles = [];
    this.heroesEaten = 0;
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if (this.riddles.length === 4) {
      this.riddles.shift();
    }
  }

  attemptAnswer(guess) {
    if (this.riddles.find(riddle => riddle.answer === guess)) {
      this.riddles = this.riddles.filter(riddle => riddle.answer != guess);
      if (this.riddles.length > 0) {
        return 'That wasn\'t that hard, I bet you don\'t get the next one';
      } else {
        return 'PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"' + guess + '\"???';
      }
    } else {
      this.heroesEaten += 1;
    }
  }
}

module.exports = Sphinx;
