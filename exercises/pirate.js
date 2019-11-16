class Pirate {
  constructor(name, job = 'Scallywag') {
    this.name = name;
    this.job = job;
    this.cursed = false;
    this.cursedCounter = 0;
    this.booty = 0;
  }

  commitHeinousAct() {
    this.cursedCounter += 1;
    if (this.cursedCounter > 2) {
      this.cursed = true;
    }
  }

  robShip() {
    this.booty += 100;
    return 'YAARRR!';
  }
}

module.exports = Pirate;
