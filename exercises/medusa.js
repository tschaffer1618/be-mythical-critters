class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  stare(person) {
    this.statues.unshift(person);
    person.stoned = true;
    if (this.statues.length > 3) {
      var freed_person = this.statues.pop();
      freed_person.stoned = false;
    }
  }
}

module.exports = Medusa;
