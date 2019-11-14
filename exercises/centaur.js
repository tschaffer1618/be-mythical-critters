class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed =  breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.actionCount = 0;
  }

  incrementAction() {
    this.actionCount += 1;
    if (this.actionCount > 2) {
      this.cranky = true;
    }
  }

  resetActionCount() {
    this.cranky = false;
    this.actionCount = 0;
  }

  shoot() {
    if (this.cranky || this.layingDown) {
      return 'NO!';
    } else {
      this.incrementAction();
      return 'Twang!!!';
    }
  }

  run() {
    if (this.layingDown) {
      return 'NO!';
    } else {
      this.incrementAction();
      return 'Clop clop clop clop!!!';
    }
  }

  sleep() {
    if (this.standing) {
      return 'NO!';
    } else {
      this.resetActionCount();
      return 'ZZZZ';
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown =  false;
  }

  drinkPotion() {
    if (this.standing && this.cranky) {
      this.resetActionCount();
    } else if (this.standing && !this.cranky) {
      this.cranky = true
    } else {
      return 'Not while I\'m laying down!';
    }
  }
}

module.exports = Centaur;
