const express = require('express');
const bcrypt = require('bcryptjs');

const app = express();

const saltCount = bcrypt.genSaltSync(15);

const hashData = data => {
  return bcrypt.hashSync(data, saltCount);
};

const memoize = fn => {
  const cache = {};

  return n => {
    const a = Date.now();
    if (n in cache) {
      console.log('Fetching from cache', n);

      const b = Date.now();
      const res = b - a;

      console.log(`The script was running < ${res} > ms.`);

      return cache[n];
    } else {
      if (!n) return 'Missing value for hashing';
      console.log('Calculating result', n);

      const result = fn(n.toString());

      cache[n] = result;

      const b = Date.now();
      const res = b - a;

      console.log(`The script was running < ${res} > ms.`);

      return result;
    }
  };
};

const hashResult = memoize(hashData);

console.log(hashResult(3) + '\n');

console.log(hashResult(5) + '\n');

console.log(hashResult('Hello World') + '\n');

console.log(hashResult(3) + '\n');

console.log(hashResult(6) + '\n');

console.log(hashResult('Hello World') + '\n');

console.log(hashResult(4) + '\n');

app.listen(4000, () => console.log('App is listening on port 4000!'));
