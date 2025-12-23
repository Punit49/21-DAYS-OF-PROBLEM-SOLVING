// ? Q. Find All Anagram Pairs in an Array of Strings - 
// * Bruteforce Method - We compare every word with every other word one by one. For each pair, we count characters and check if both words have the same letters. If two words are anagrams, we store them as valid results.

function allAnagramPairs(stringArray){
    let anagrams = {};

    function isAnagram(str1, str2){
        if(str1.length !== str2.length) return false;
        let strObject = {};

        for (const char of str1) {
            strObject[char] = (strObject[char] || 0) + 1;
        }
        for (const char of str2) {
            if(!strObject[char]) return false;
            strObject[char]--;
        }
        return true;
    }

    for(let i = 0; i < stringArray.length; i++){
        for(let j = i + 1; j < stringArray.length; j++){
            if(isAnagram(stringArray[i], stringArray[j])){
                anagrams[stringArray[i]] = true;
                anagrams[stringArray[j]] = true;    
            } 
        }
    }

    return Object.keys(anagrams);
}

console.log(allAnagramPairs(["cat", "tac", "silent", "act", "listen", "tic"]));

// * Using Optimized Method without Built-ins -For each word, we create a character frequency pattern as a unique key, Words having the same pattern must be anagrams, so we group them together. In the end, we return only those groups which have more than one word.

function allAnagramPairs2(strArray){
    let groups = {};

    function getKeys(word){
        let freq = Array(26).fill(0);

        for (const ch of word) {
            freq[ch.charCodeAt(0) - 97]++;
        }

        let key = "";
        for(let i = 0; i < 26; i++){
            key += freq[i] + "#";
        }
        return key;
    }

    for (const word of strArray) {
        let key = getKeys(word);

        if(!groups[key]){
            groups[key] = [];
        }

        groups[key].push(word);
    }

    return Object.values(groups).filter(group => group.length > 1);
}

console.log(allAnagramPairs3(["cat", "tac", "silent", "act", "listen", "tic"]));

// * Using Builtins - We sort characters of each word to get a common form. All anagrams become the same after sorting, so we use it as a key. Words with the same key are grouped and returned as anagram pairs.
function allAnagramPairs3(strArray){
    let map = {};
    
    for (const word of strArray) {
        let key = word.split("").sort().join("");
        
        if(!map[key]) {
            map[key] = [];
        }
        
        map[key].push(word);
    }
    
    return Object.values(map).filter(group => group.length > 1);
}

console.log(allAnagramPairs3(["cat", "tac", "silent", "act", "listen", "tic"]));