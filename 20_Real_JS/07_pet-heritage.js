/**
 * Represents a generic pet.
 */
class Pet {
  /**
   * Creates a new Pet instance.
   * @param {string} name - The pet's name.
   * @param {number} age - The pet's age.
   * @param {string} species - The pet's species.
   */
  constructor(name, age, species) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  /**
   * Logs the pet's species.
   */
  makeSound() {
    console.log(`I am a ${this.species}`);
  }
}

/**
 * Represents a dog, inheriting from Pet.
 */
class Dog extends Pet {
  /**
   * Creates a new Dog instance.
   * @param {string} name - The dog's name.
   * @param {number} age - The dog's age.
   * @param {string} breed - The dog's breed.
   * @param {string} favoriteToy - The dog's favorite toy.
   */
  constructor(name, age, breed, favoriteToy) {
    super(name, age, 'Dog');
    this.breed = breed;
    this.favoriteToy = favoriteToy;
  }

  /**
   * Logs a message about the dog fetching its favorite toy.
   */
  fetch() {
    console.log(`${this.name} is fetching its ${this.favoriteToy}`);
  }
}

/**
 * Represents a cat, inheriting from Pet.
 */
class Cat extends Pet {
  /**
   * Creates a new Cat instance.
   * @param {string} name - The cat's name.
   * @param {number} age - The cat's age.
   * @param {string} color - The cat's color.
   * @param {string} favoriteNapSpot - The cat's favorite napping spot.
   */
  constructor(name, age, color, favoriteNapSpot) {
    super(name, age, 'Cat');
    this.color = color;
    this.favoriteNapSpot = favoriteNapSpot;
  }

  /**
   * Logs a message about the cat purring on its favorite nap spot.
   */
  purr() {
    console.log(`${this.name} purrs on the ${this.favoriteNapSpot}`);
  }
}