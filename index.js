class Paws {
    constructor(name, species) {
      this.name = name || 'Pawfect';
      this.species = species || 'Kitten';
      this.pawSoftness = 100;
    }
  
    tapPaws() {
      if (this.pawSoftness > 0) {
        console.log(`${this.name} the ${this.species} is tapping its soft paws!`);
        this.pawSoftness -= 10;
      } else {
        console.log(`${this.name}'s paws are too soft to tap anymore!`);
      }
      this.displayPawSoftness();
    }
  
    groomPaws() {
      console.log(`${this.name} the ${this.species} is grooming its paws.`);
      this.pawSoftness += 5;
      this.displayPawSoftness();
    }
  
    displayPawSoftness() {
      console.log(`${this.name}'s paw softness level: ${this.pawSoftness}`);
    }
  }
  
  // Example usage
  const fluffyPaws = new Paws('Fluffster', 'Kitten');
  const gentlePaws = new Paws('Gentlepaws', 'Puppy');
  
  fluffyPaws.tapPaws();
  gentlePaws.groomPaws();
  