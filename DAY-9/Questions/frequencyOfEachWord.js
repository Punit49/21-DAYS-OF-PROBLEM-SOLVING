// ? Q. Count Frequency of Each Word in a Sentence - 
// * Approach - I iterate through the string character by character, constructing words, and whenever a space is encountered, I update the word’s frequency in an object. This way, I count the occurrence of each word without using built-in methods.

function frequencyOfEachWord(str){
    if(str.length === 0) return {};
    str = str.trim();
    let frequency = {}, word = "";

    for(let i = 0; i < str.length; i++){
        if(str[i] !== " "){
            word += str[i];
        } else if(word !== ""){    
            frequency[word] = (frequency[word] || 0) + 1;
            word = "";
        }
    }

    if(word !== "") {
        frequency[word] = (frequency[word] || 0) + 1;
    }
    return frequency;
}

console.log(frequencyOfEachWord("i love coding and i love javascript"));
