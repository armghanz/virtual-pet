const MIN_FITNESS = 0;
const MIN_ACCEPTABLE_FITNESS = 3;
const MAX_FITNESS = 10;
const MIN_HUNGER = 0;
const MIN_ACCEPTABLE_HUNGER = 5;
const MAX_HUNGER = 10;
const MAX_AGE = 30;
const DEAD_PET_ERROR = "(*_*) Your pet has died.";

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = MIN_HUNGER;
  this.fitness = MAX_FITNESS;
  this.children = [];
}

Pet.prototype = {
  get isAlive() {
    return (
      this.age < MAX_AGE &&
      this.hunger < MAX_HUNGER &&
      this.fitness > MIN_FITNESS
    );
  },
};

Pet.prototype.growUp = function () {
  if (!this.isAlive) {
    throw new Error(DEAD_PET_ERROR);
  }
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function () {
  if (!this.isAlive) {
    throw new Error(DEAD_PET_ERROR);
  }
  this.fitness = Math.min(this.fitness + 4, MAX_FITNESS);
};

Pet.prototype.feed = function () {
  if (!this.isAlive) {
    throw new Error(DEAD_PET_ERROR);
  }
  this.hunger = Math.max(this.hunger - 3, MIN_HUNGER);
};

Pet.prototype.checkUp = function () {
  if (!this.isAlive) {
    throw new Error(DEAD_PET_ERROR);
  }
  const needsWalk = this.fitness <= MIN_ACCEPTABLE_FITNESS;
  const isHungry = this.hunger >= MIN_ACCEPTABLE_HUNGER;

  if (needsWalk && isHungry) return "I am hungry AND I need a walk!"
  if (needsWalk) return "I need a walk!";
  if (isHungry) return "I am hungry!";
};

Pet.prototype.haveBaby = function (childName) {
  if (!this.isAlive) {
    throw new Error(DEAD_PET_ERROR);
  }
  this.children.push(new Pet(childName));
};

Pet.prototype.adoptChild = function(pet) {
    if (!this.isAlive) {
      throw new Error("(*_*) Your pet has died.");
    }
      this.children.push(pet);
  };

module.exports = Pet;