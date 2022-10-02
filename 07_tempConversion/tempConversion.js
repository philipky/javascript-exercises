const ftoc = function(fTemp) {
  if (typeof fTemp !== 'number') {
    return 'ERROR';
  }
  let output = (fTemp - 32)* 5 / 9
  return Math.round(output * 10) / 10;
};

const ctof = function(cTemp) {
  if (typeof cTemp !== 'number') {
    return 'ERROR';
  }
  
  let output = (cTemp * 9 / 5 + 32);
  return Math.round(output * 10) / 10;
};

console.log(ftoc(100));
console.log(ctof(73.2));
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
