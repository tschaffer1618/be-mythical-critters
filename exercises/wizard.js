class Wizard {
  constructor(hash) {
    this.name = hash.name;
    this.bearded = hash.hasOwnProperty('bearded') ? hash.bearded : true;
    this.isRested = true;
    this.spellCounter = 0;
  }

  incantation(incantation) {
    return incantation.toUpperCase();
  }

  cast() {
    if (this.spellCounter < 2) {
      this.spellCounter += 1;
      return 'MAGIC BULLET';
    } else if (this.spellCounter === 2) {
      this.spellCounter += 1;
      this.isRested = false;
      return 'MAGIC BULLET';
    } else {
      return 'I SHALL NOT CAST!';
    }
  }
}

module.exports = Wizard;
