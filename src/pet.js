const minFitness = 0;
const minAcceptableFitness = 3;
const maxFitness = 10;
const minHunger = 0;
const minAcceptableHunger = 5;
const maxHunger = 10;
const maxAge = 30;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = minHunger;
  this.fitness = maxFitness;
}

Pet.prototype = {
  get isAlive() {
    return (
      this.age < maxAge &&
      this.hunger < maxHunger &&
      this.fitness > minFitness
    );
  },
};

Pet.prototype.growUp = function () {
  if (!this.isAlive) {
    throw new Error("(*_*) Your pet has died.");
  }
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function () {
  if (!this.isAlive) {
    throw new Error("(*_*) Your pet has died.");
  }
  this.fitness = Math.min(this.fitness + 4, maxFitness);
};

Pet.prototype.feed = function () {
  if (!this.isAlive) {
    throw new Error("(*_*) Your pet has died.");
  }
  this.hunger = Math.max(this.hunger - 3, minHunger);
};

Pet.prototype.checkUp = function () {
  if (!this.isAlive) {
    throw new Error("(*_*) Your pet has died.");
  }
  if (
    this.fitness <= minAcceptableFitness &&
    this.hunger >= minAcceptableHunger
  ) {
    return "I am hungry AND I need a walk!";
  }
  if (this.fitness <= minAcceptableFitness) {
    return "I need a walk!";
  }
  if (this.hunger >= minAcceptableHunger) {
    return "I am hungry!";
  }
  return "I feel great!";
};

Pet.prototype.haveBaby = function (childName) {
  if (!this.isAlive) {
    throw new Error("(*_*) Your pet has died.");
  }
  this.children = this.children || [];
  this.children.push(new Pet(childName));
};

module.exports = Pet;