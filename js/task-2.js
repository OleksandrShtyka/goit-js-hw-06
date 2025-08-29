// Task #2 — Storage with private field
class Storage {
  #items;
  constructor(items) {
    this.#items = Array.isArray(items) ? [...items] : [];
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

// Demo
const storage = new Storage(["Nanitoids", "Antigravitator"]);
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
storage.removeItem("Antigravitator");
console.log(storage.getItems()); // ["Nanitoids", "Droid"]
