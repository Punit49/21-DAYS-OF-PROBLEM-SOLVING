let rows = 25;
let q1 = document.getElementById("q1");

// ? Q1. 
for(let i = 1; i <= rows; i++){
    for(let j = 1; j <= i; j++){
        q1.textContent += "* ";
    }
    q1.textContent += "\n";
}

// * Other way
// let output = "";
// for(let i =1; i<=rows; i++){
//     output += "* ".repeat(i) + "\n";
// }
// q1.textContent = output;

// ? Q2. 
let q2 = document.getElementById("q2");
for(let i = rows; i >= 1; i--){
    for(let j = 1; j <= i; j++){
        q2.textContent += "* ";
    }
    q2.textContent += "\n";
}

// ? Q3. 
let q3 = document.getElementById("q3");
let output = "";
let count = 1;

for(let i = 1; i <= rows; i++){
    for(let j = rows - i; j > 0; j--){
        output  += "  ";
    } 
    for(let j = 1; j <= count; j++){
        output  += "* ";
    }
    output += "\n";
    count += 2;
}

q3.textContent = output;

// * Other Way
for(let i = 1; i <= rows * 2 - 1; i+=2){
    let str = "";
    const currentRow = (i + 1) / 2;

    for(let j = 1; j <= rows + currentRow - 1; j++){
        if(j <= rows - currentRow){
            str += " ";
        }
        else {
            str += "*";
        }
    }

    // console.log(str);
}

// * Extra assignment - 27:30
for(let i = 1; i <= rows * 2 - 1; i += 2){
    let str = "";
    const currentRow = (i + 1) / 2;

    for(let j = 1; j <= rows * 2 - 1; j++){
        if(j <= rows - currentRow){
            str += "| ";
        }
        else if (!(j <= rows - currentRow) && !(j > rows-currentRow + i) ){
            str += "* ";
        }
        else if(j >= rows - currentRow){
            str += "| ";
        }
    }
    // console.log(str);
}


// ? Q4.  
let q4 = document.getElementById("q4");
let count2 = 0;

for(let i = 1; i <= rows; i++){
    for(let k = 1; k < i; k++){
        q4.textContent += "  ";
    }
    for(j = rows * 2 - 1; j > count2; j--){
        q4.textContent += "* ";
    }
    count2 += 2;
    q4.textContent += "\n";
}

// * Other Way
// for(let i = rows * 2 - 1; i >= 1; i-=2){
//     let str = "";
//     const currentRow = (i + 1) / 2;

//     for(let j = 1; j <= rows + currentRow - 1; j++){
//         if(j <= rows - currentRow){
//             str += "  ";
//         }
//         else {
//             str += "* ";
//         }
//     }

//     console.log(str);
// }

// ? Q5. 
let q5 = document.querySelector("#q5");

for(let i = 1; i <= rows; i++){
    for(let j = 1; j <= rows; j++){
       if(i === 1 || i === rows || j === 1 || j === rows){
            q5.textContent += "* ";
       }
       else {
            q5.textContent += "  ";
       }
    }
    q5.textContent += "\n";
}

// ? Q6. 
let q6 = document.querySelector("#q6");

for(let i = 1; i <= rows * 2 - 1; i+=2){
    let str = "";
    const currentRow = (i + 1) / 2;

    for(let j = 1; j <= rows + currentRow - 1; j++){
        if((j === rows + currentRow - 1) || (i === rows * 2 - 1) || (j === rows - currentRow + 1)){
            str += "* ";
        }
        else {
            str += "  ";
        }
    }
    str += "\n";
    q6.textContent += str;
}

// ? Q7.
let q7 = document.querySelector("#q7");
let num = 1;

for(let i = 1; i <= rows; i++){
    let str = "";
    let num2 = num;
    for(let j = 1; j <= i; j++){
        str += `${num2} `;
        num2 = Number(!num2);
    }
    str += "\n";
    num = Number(!num);
    q7.textContent += str;
}

// * Better Way - 
for(let i = 1; i <= rows; i++){
    let str = "";
    for(let j = 1; j <= i; j++){
        str += `${ (i % 2 === 1 ? j % 2 : (j + 1) % 2) } ` ;
    }
    str += "\n";
    q7.textContent += str;
}

// ? Q8. 
let q8 = document.querySelector("#q8");

for(let i = rows * 2 - 1; i >= 1; i-=2){
    let str = "";
    const currentRow = (i + 1) / 2;

    for(let j = 1; j <= rows + currentRow - 1; j++){
        if((j === rows + currentRow - 1) || (j === rows - currentRow + 1) || (i === rows * 2 - 1)){
            str += "* ";
        }
        else {
            str += "  ";
        }
    }

    str += "\n";
    q8.textContent += str;
}

// ? Q9. 
let q9 = document.querySelector("#q9");

// let str = "";
// let counter = rows * 2 - 3;
// for(let i = 1; i <= rows; i++){
//     for(let j = 1; j <= i; j++){
//         str+= "*";
//     }
//     for(let k = 1; k <= counter; k++){
//         str+=" "
//     }
//     for(let l = 1; l <= i; l++){
//         if(i == rows && l == rows) break;
//         str+= "*";
//     }

//     str+="\n";
//     counter -= 2;
// }

// counter = 1;
// for(let i = rows; i > 1; i--){
//     for(let j = 1; j < i; j++){
//         str+= "*";
//     }
//     for(let k = 1; k <= counter; k++){
//         str+=" "
//     }
//     for(let l = 1; l < i; l++){
//         if(i == rows && l == rows) break;
//         str+= "*";
//     }

//     str+="\n";
//     counter += 2;
// }
// q9.textContent = str;

// * Better Way - 
let str = "";

for (let i = 1; i <= rows; i++) {

    for (let j = 1; j <= i; j++) {
        if(i == rows && j == rows) break;
        str += "*";
    }

    for (let j = 1; j < 2 * (rows - i); j++) {
        str += " ";
    }

    for (let j = 1; j <= i; j++) {
        str += "*";
    }

    str += "\n";
}

for (let i = rows - 1; i >= 1; i--) {

    for (let j = 1; j <= i; j++) {
        str += "*";
    }

    for (let j = 1; j < 2 * (rows - i); j++) {
        str += " ";
    }

    for (let j = 1; j <= i; j++) {
        str += "*";
    }

    str += "\n";
}

q9.textContent = str;

// ? Q10.
let q10 = document.querySelector("#q10");

let str2 = "";
for(let i = 1; i <= rows - 2; i++){
    for(let j = 1; j <= rows + i - 1; j++){
        if(j <= rows - i){
            str2 += "|";
        }
        else {
            str2 += "*";
        }
    }
    str2 += "\n";
}

for(let i = rows - 3; i >= 1; i--){
    for(let j = 1; j <= rows + i - 1; j++){
        if(j <= rows - i){
            str2 += "|";
        }
        else {
            str2 += "*";
        }
    }
    str2 += "\n";
}

q10.textContent = str2;

// ? Q11. 
let q11 = document.querySelector("#q11");
let str3 = "";

for(let i = 1; i <= rows; i++){
    for(let j = 1; j <= rows * 2 - i; j++){
        if(j < i) str3 += " ";
        else str3 += "*";
    }
    str3 += "\n";
}

for(let i = rows - 1; i >= 1; i--){
    for(let j = 1; j <= rows * 2 - i; j++){
        if(j < i) str3 += " ";
        else str3 += "*";
    }
    str3 += "\n";
}

q11.textContent = str3;

// ? Q12. 
let q12 = document.querySelector("#q12");
let str4 = "";

for(let i = 1; i <= rows - 2; i++){
    for(let j = 1; j <= rows + i - 1; j++){
        if(j === rows + i - 1 || j === rows - i + 1){
            str4+="*";
        } else {
            str4+=" ";
        }
    }
    str4+= "\n";
}

for(let i = rows - 3; i >= 1; i--){
    for(let j = 1; j <= rows + i - 1; j++){
        if(j === rows + i - 1 || j === rows - i + 1){
            str4+="*";
        } else {
            str4+=" ";
        }
    }
    str4+= "\n";
}

q12.textContent = str4;

// ? Q13. 
let q13 = document.querySelector("#q13");
let str5 = "";

for(let i = 1; i <= rows; i++){
    for(let j = 1; j <= rows*2-i; j++){
        if(j > rows - i) str5 += "*";
        else str5 += " ";
    }
    str5 += "\n";
}

q13.textContent = str5;

// ? Q14. 
let q14a = document.querySelector("#q14a");
let q14b = document.querySelector("#q14b");
let number = 9;
let str6 = "";

// * A
for(let i = 1; i <= 10; i++){
    str6 += `${number} X ${i} = ${number * i} \n`;
}
q14a.textContent = str6;

// * B
str6 = "";
for(let i = 1; i <= number; i++){
    for(let j = 1; j <= 10; j++){
        str6 += `${i} X ${j} = ${i * j} \n`;
    }
    str6 += "\n"
}
q14b.textContent = str6;
