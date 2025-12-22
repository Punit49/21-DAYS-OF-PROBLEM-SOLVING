// ? Q. Remove All Duplicate Words From a Sentence - 
// * Using Objects as Hash Maps - I build words character by character, track seen words using an object, and add only unique words to the result
function removeDuplicatesWords(str){
    let seen = {}, word = sentence = "";

    for (const char of str) {
        if(char !== " "){
            word += char;
        } else if(word !== ""){
            if(!seen[word]){
                seen[word] = true;
                sentence += `${word} `
            }
            word = "";
        }
    }

    if(word && !seen[word]) sentence += word;
    return sentence;
}

console.log(removeDuplicatesWords("this is is a test test string string for for code"));

// * Using builtins - I split the string into words, use a Set to keep only unique words, and join them back
function removeDuplicatesWords2(str){
    return [...new Set(str.split(" "))].join(" ");
}

console.log(removeDuplicatesWords2("this is is a test test string string for for code"));