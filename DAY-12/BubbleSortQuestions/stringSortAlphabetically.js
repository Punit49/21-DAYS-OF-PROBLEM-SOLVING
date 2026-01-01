// ? Q. Sort a String Alphabetically Using Bubble Sort Logic - 
function stringSortAlphabetically(str){
    let isSorted = false;
    let arrStr = str.split("");

    for(let i = 0; i < str.length - 1; i++){
        for(let j = 0; j < str.length - i - 1; j++){
            if(arrStr[j].toLowerCase() > arrStr[j + 1].toLowerCase()){
                [arrStr[j], arrStr[j + 1]] = [arrStr[j + 1], arrStr[j]];
                isSorted = true;
            }
        }
    }

    return arrStr.join("");
}