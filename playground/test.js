const test = '3';
const test2 = test.split(',').map(v =>  parseInt(v));

const test3 = test2.includes(3);
console.log(test3);