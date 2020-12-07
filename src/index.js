const n = 5;
console.log(n);
module.exports = n;
require('dotenv').config();
console.log(process.env.MSG);
