export default class Player {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  attack(target) {
    target.health -= this.strength;
    console.log(
      `${this.name} attacked ${target.name} and cased ${this.strength} damage`
    );
  }

  isAlive() {
    return this.health > 0;
  }
}
