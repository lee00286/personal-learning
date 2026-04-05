console.time("Test 1 - Timer with normal callback");

console.log('1: Start');

setTimeout(() => console.log('2: Timeout'), 0);

Promise.resolve().then(() => console.log('3: Promise'));

process.nextTick(() => console.log('4: NextTick'));

console.log('5: End');

console.timeEnd("Test 1 - Timer with normal callback");
