console.clear();

class MyHashTable {
  constructor(size = 10) {
    this.table = new Array(size);
    this.size = size;
  }

  // Hash function
  hash(key) {
    let hashIndex = 0;

    for (let i = 0; i < key.length; i++) {
      hashIndex += key.charCodeAt(i);
    }

    // Reduce hash to a number between 0 and length (array index range)
    return hashIndex % this.size;
  }

  set(key, value) {
    let hashIndex = this.hash(key);

    // If key already exists, update its value
    if (this.table[hashIndex]?.length === 2 && this.table[hashIndex][0] === key) {
      this.table[hashIndex][1] = value;
    } else {
      this.table[hashIndex] = [key, value];
    }
  }

  get(key) {
    let hashIndex = this.hash(key);
    return this.table[hashIndex];
  }

  remove(key) {
    let hashIndex = this.hash(key);
    if (this.table[hashIndex]) {
      this.table[hashIndex] = undefined;
    }
  }

  display() {
    console.log("---------- Hash Table ----------");
    if (!this.table) {
      return;
    }

    for (let i = 0; i < this.table.length; i++) {
      const element = this.table[i];

      if (element !== undefined) {
        console.log(`Index ${i}: ${element[0]} -> ${element[1]}`);
      }
    }
    console.log("--------------------------------");
  }
}

// Tests with Hash Table
const fruits = new MyHashTable(10);

fruits.set("apple", "red");
fruits.set("banana", "yellow");
fruits.set("cherry", "red");
fruits.set("lemon", "bright yellow");
fruits.set("grape", "purple");
fruits.set("blueberry", "blue");

console.log(fruits.get("apple"));

fruits.display();

fruits.remove("apple");

fruits.display();
