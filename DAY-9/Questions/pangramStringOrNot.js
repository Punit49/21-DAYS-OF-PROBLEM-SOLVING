// ? Q. Check If a String Is a Pangram - (must contains a to z)
// * Using Object (Approach) - Maintained an alphabet object, iterating over each char and deleting that character from alphabet object and at last if object's keys length is 0 that means it is an pangram string. 

function isPangram(str){
    if(str.length < 26) return false;

    let alphabets = {
        a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, g: 1, h: 1, i: 1, j: 1, k: 1, l: 1, m: 1, n: 1, o: 1, p: 1, q: 1, r: 1, s: 1, t: 1, u: 1, v: 1, w: 1, x: 1, y: 1, z: 1
    };

    for (const char of str) {
        if(char !== " "){
            delete alphabets[char.toLowerCase()];
        }
    }

    return Object.keys(alphabets).length === 0;
}

console.log(isPangram("The quick brown fox Jumps over the lazy dog"));

// * Using set (approach) - Created a set and storing each alphabet into this set, as it only stores unique elements, at last it must contain 26 characters, for the string to be panagram.

function isPangram2(str){
    let charSet = new Set();
    str = str.toLowerCase();
    
    for (const char of str) {
        if(char >= "a" && char <= "z"){
            charSet.add(char);
        }
    }
    return charSet.size == 26;
}

console.log(isPangram2("The quick brown fox Jumps over the lazy dog"));

// * Using Inbuilts - iterating over charcodes until 26 and checking wheather all 26 alphabets belongs to that string or not. 
function isPangram3(str){
    str = str.toLowerCase();
    for(let i = 0; i < 26; i++){
        if(!str.includes(String.fromCharCode(97 + i))){
            return false;
        }
    }
    return true;
}

console.log(isPangram3("The quick brown fox Jumps over the lazy dog"));