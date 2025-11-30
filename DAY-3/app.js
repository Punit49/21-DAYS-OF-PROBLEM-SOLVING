let rows = 5;
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

// for(let i = 1; i <= rows; i++){
//     let str = "";
//     let num2 = num;
//     for(let j = 1; j <= i; j++){
//         str += `${num2} `;
//         num2 = Number(!num2);
//     }
//     str += "\n";
//     num = Number(!num);
//     q7.textContent += str;
// }

// * Better Way - 
for(let i = 1; i <= rows; i++){
    let str = "";
    for(let j = 1; j <= i; j++){
        str += `${ (i % 2 === 1 ? j % 2 : (j + 1) % 2) } ` ;
    }
    str += "\n";
    q7.textContent += str;
}