const fs = require('fs');

console.time("Test 2 - Timer with I/O cycle");

fs.readFileSync('./test-file.txt', 'utf8');

console.log('1" Start');

setTimeout(() => console.log('2: Timeout'), 0);

Promise.resolve().then(() => console.log('3: Promise'));

process.nextTick(() => console.log('4: NextTick'));

console.log('5: End');

console.timeEnd("Test 2 - Timer with I/O cycle");
