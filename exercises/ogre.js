class Ogre {
  constructor(name, home = 'Swamp') {
    this.name = name;
    this.home = home;
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter += 1;
    if (human.noticesOgre()) {
      this.swingAt(human);
    }
  }

  swingAt(human) {
    this.swings += 1;
    if (this.swings === 2) {
      human.knockedOut = true;
    }
  }

  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;
