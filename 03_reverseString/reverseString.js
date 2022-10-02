
const reverseString = function(string) {
    
    // return string.split('').reverse().join('');
    if (string == '') {
        return '';
    } else {
         const characters = string.split('');
        //  const output = characters.reverse();
         const output = [];
        let len = characters.length;
  
        for (let i = 0; i < len; i++) {
            output[i] = characters[len - 1 - i];
        }
        return output.join('');
    }
    
};

// Do not edit below this line
module.exports = reverseString;
