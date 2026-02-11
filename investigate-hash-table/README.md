# Hash Table and Collision Handling

Subject: Implementation of Hash Table and Collision Handling

Objectives:
- To understand the internal mechanics of data structures like `Object` and `Map` in JavaScript and manage data efficiently using hash functions.
- To compare hash algorithms and implement a collision-resistant data structure.

## Implementation

- `hash-simple.js`: Implemented a basic key-value store; identified data loss issues during hash collisions.
- `hash-chaining.js`: Implemented a hash table with chaining; investigated solution on hash collisions handling.
  - Separate Chaining: Resolved collisions by storing multiple key-value pairs in buckets using arrays.
- `hash-chaining-v2.js`: Implemented a hash table with chaining using Polynomial Rolling Hash and DJB2 algorithms; investigated hash generation logic.
  - Polynomial Rolling Hash: Implemented a weighted hash function using prime numbers (`P=31`) to distinguish string permutations (e.g., 'abc' vs 'cba').
  - DJB2 Algorithm: Applied the classic DJB2 logic using bitwise shifting (hash << 5) for high-speed computation and uniform distribution.

### Testing Locally

```bash
node hash-simple.js
node hash-chaining.js
node hash-chaining-v2.js
```

Check the console output for the results.

## Technical Insights

- While the average lookup is `O(1)`, the worst-case complexity can be `O(N)` depending on the hash function implementation and the number of collisions.
- Object vs. Map: Analyzed differences in key types, insertion order, and performance overhead, concluding that Map is superior for frequent additions and large datasets.
- Hash Functions: Analyzed the impact of hash function on data retrieval and collision handling, concluding that Polynomial Rolling Hash and DJB2 algorithms are suitable for maintaining constant-time complexity.

## Key Takeaways

- A well-distributed hash function and timely resizing (based on Load Factor) are critical for maintaining constant-time complexity in high-scale systems.
