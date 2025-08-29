// Task #3 — StringBuilder with private field
class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = String(initialValue ?? "");
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value += String(str);
  }
  padStart(str) {
    this.#value = String(str) + this.#value;
  }
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Demo
const builder = new StringBuilder(".");
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
