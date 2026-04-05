console.clear();

class MyHashTable {
  constructor(buckets = 10) {
    this.bucketCount = buckets;
    this.table = new Array(this.bucketCount).fill(null).map(() => []);
  }

  // Hash function
  hash(key) {
    let hashIndex = 0;

    for (let i = 0; i < key.length; i++) {
      hashIndex += key.charCodeAt(i);
    }

    // Reduce hash to a number between 0 and the bucket count (array index range)
    return hashIndex % this.bucketCount;
  }

  set(key, value) {
    let hashIndex = this.hash(key);

    // If bucket is empty, initialize
    if (!this.table[hashIndex]) {
      this.table[hashIndex] = [];
    }

    for (let i = 0; i < this.table[hashIndex].length; i++) {
      // If key already exists in the bucket, update its value
      if (this.table[hashIndex][i]?.[0] === key) {
        this.table[hashIndex][i][1] = value;
        return;
      }
    }

    // Otherwise, add the key-value pair to the bucket
    this.table[hashIndex].push([key, value]);
  }

  get(key) {
    let hashIndex = this.hash(key);

    if (this.table[hashIndex]) {
      for (let i = 0; i < this.table[hashIndex].length; i++) {
        // If key exists in the bucket, return its value
        if (this.table[hashIndex][i]?.[0] === key) {
          return this.table[hashIndex][i][1];
        }
      }
    }

    // Key not found
    return undefined;
  }

  remove(key) {
    let hashIndex = this.hash(key);

    // If bucket is empty, return
    if (!this.table[hashIndex]) {
      return;
    }

    for (let i = 0; i < this.table[hashIndex].length; i++) {
      // If key exists in the bucket, remove key-value pair
      if (this.table[hashIndex][i]?.[0] === key) {
        this.table[hashIndex].splice(i, 1);
        return;
      }
    }
  }

  display() {
    console.log("---------- Hash Table ----------");
    if (!this.table) {
      return;
    }

    for (let i = 0; i < this.bucketCount; i++) {
      const bucket = this.table[i];

      for (let j = 0; j < bucket.length; j++) {
        const element = bucket[j];

        if (element && element?.length === 2) {
          console.log(`Bucket ${i}: ${element[0]} -> ${element[1]}`);
        }
      }
    }

    console.log("--------------------------------");
  }
}

// Tests with Hash Table
const fruits = new MyHashTable(10);

console.log(fruits);

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
