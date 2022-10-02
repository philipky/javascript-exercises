const caesar = function(str, num) {
    //basic checks on arguments: str non-empty, num is a valid number
    if (typeof num !== 'number') {
        return 'ERROR';
    } else if (str === '') {
        return 'Emptys string!';
    }

    //round the num argument to integer and reduce multiples of 26
    let intNum = Math.round(num)%26;
    //convert the string into an array. For each element in the array, 
    //we will shift the charater by "num" code points forward (if positive)
    //or backward (if negative)
    const arrStr = str.split('');
    const arrCeasar = [];
    for (const chrt of arrStr) {
        let newCodePoint = chrt.codePointAt(0) + intNum;
        
        //Need to have different treatments if a character goes beyond the letter range
        if (chrt.match(/[a-z]/) && 
                    newCodePoint > 'z'.codePointAt(0) ) {

                     newCodePoint = chrt.codePointAt(0) + intNum - 26;

        } else if (chrt.match(/[A-Z]/) && 
                    newCodePoint > 'Z'.codePointAt(0)) {
                    newCodePoint = chrt.codePointAt(0) + intNum - 26; 
            
        } else if (chrt.match(/[a-z]/) &&
                    newCodePoint < 'a'.codePointAt(0)) {
                    newCodePoint = chrt.codePointAt(0) + intNum + 26;
        } else if (chrt.match(/[A-Z]/) &&
                    newCodePoint < 'A'.codePointAt(0)) {
                    newCodePoint = chrt.codePointAt(0) + intNum + 26;
        }
        if (chrt.match(/[a-z]/) || chrt.match(/[A-Z]/)) {
            arrCeasar.push(String.fromCodePoint(newCodePoint));
        } else {
            arrCeasar.push(chrt);
        }
    }
    return arrCeasar.join('');
};
console.log(caesar('Hello, World!', -29));
// Do not edit below this line
module.exports = caesar;
