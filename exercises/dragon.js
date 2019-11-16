class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.foodCounter = 0;
  }

  eat() {
    this.foodCounter += 1;
    if (this.foodCounter > 2) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
