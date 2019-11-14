class Direwolf {
  constructor(name, home = 'Beyond the Wall', size = 'Massive') {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (this.home === stark.location) {
      if (this.starksToProtect.length < 2) {
        this.starksToProtect.push(stark);
        stark.safe = true;
        this.huntsWhiteWalkers = false;
      }
    }
  }

  leave(stark) {
    
  }
}

module.exports = Direwolf;
