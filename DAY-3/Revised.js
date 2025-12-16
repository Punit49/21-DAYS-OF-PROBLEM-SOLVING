let rows = 10;
// * Pattern 1 - Print Right-Angled Star Triangle
// for(let i = 0; i < 5; i++){
//     let str = "";
//     for(let j = 0; j <= i; j++){
//         str += "* ";
//     }
//     console.log(str)
// }

// * Pattern 2 - Print Inverted Right-Angled Triangle
// for(let i = 5; i > 0; i--){
//     let str = "";
//     for(let j = 0; j < i; j++){
//         str += "* ";
//     }
//     console.log(str);
// }

// * Pattern 3 - Print Pyramid Pattern
// for(let i = 0; i < rows; i++){
//     let str = "";
//     for(let j = 1; j <= rows + i; j++){
//         if(j < rows - i){
//             str += "  ";
//         } else {
//             str += "* ";
//         }
//     }
//     console.log(str);
// }

// * Assignment question - 
// for(let i = 0; i < rows; i++){
//     let str = "";
//     for(let j = 1; j <= rows * 2 - 1; j++){
//         if(j < rows - i || j > rows + i){
//             str += "| ";
//         } else {
//             str += "* ";
//         } 
        
//     }
//     console.log(str);
// }

// ! Other way of doing this - 
// let count = 1;

// for(let i = 1; i <= rows; i++){
//     let output = "";
//     for(let j = rows - i; j > 0; j--){
//         output += "  ";
//     }
//     for(let k = 1; k <= count; k++){
//         output += "* ";
//     }
//     count += 2;
//     console.log(output);
// }

// * Pattern 4 - Print Inverted Pyramid Pattern
// for(let i = rows - 1; i >= 0; i--){
//     let str = "";
//     for(let j = 1; j <= rows + i; j++){
//         if(j < rows - i){
//             str += "  ";
//         } else {
//             str += "* ";
//         }
//     }
//     console.log(str);
// }

// * Pattern 5 - Print Hollow Square Pattern
// for(let i = 1; i <= rows; i++){
//     let str = "";
//     for(let j = 1; j <= rows; j++){
//         if(i == 1 || i == rows || j == 1 || j == rows){
//             str += "* ";
//         } else {
//             str += "  "
//         }
//     }
//     console.log(str)
// }

// * Pattern 6 - Print Hollow Pyramid Pattern
// for(let i = 1; i <= rows; i++){
//     let str = "";
//     for(let j = 1; j <= rows + i - 1; j++){
//         if(j == rows + i - 1|| i == rows || j == rows - i + 1){
//             str += "* ";
//         } else {
//             str += "  ";
//         } 
//     }
//     console.log(str);
// }

// * Pattern 7 - Print Alternating Binary Triangle
// let val = 1;
// for(let i = 1; i <= 5; i++){
//     let str = "";
//     let val2 = val;
//     for(let j = 1; j<= i; j++){
//         str += `${val2} `;
//         val2 = val2 == 1 ? 0 : 1;
//     }
//     val = val == 1 ? 0 : 1;
//     console.log(str);
// }

// * Pattern 8 - Print Hollow Inverted Pyramid
// for(let i = 1; i <= rows; i++){
//     let str = "";

//     for(let j = 1; j <= rows * 2 - i; j++){
//         if(i == 1 || j == rows * 2 - i || j === i){
//             str += "* ";
//         } else {
//             str += "  ";
//         }
//     }

//     console.log(str);
// }

// * pattern 9 - Print Butterfly Pattern (Optimized Code) 
// for(let i = 1; i <= rows; i++){
//     let str = "";
//     for(let j = 1; j <= rows * 2 - 1; j++){
//        if(j <= i || j >= rows * 2 - i){
//          str += "*";
//        } else {
//         str += " ";
//        }
//     }
//     console.log(str);
// }

// * Just Reversed the above conditions and it got worked, but i am trying other way too. 
// for(let i = rows - 1; i >= 1; i--){
//     let str = "";
//     for(let j = rows * 2 - 1; j >= 1; j--){
//        if(j <= i || j >= rows * 2 - i){
//          str += "*";
//        } else {
//         str += " ";
//        }
//     }
//     console.log(str);
// }

// * Other Way - 
// for(let i = 1; i < rows; i++){
//     let str = "";
//     for(let j = 1; j < rows * 2; j++){
//         if(j <= rows - i || j > rows + i - 1){
//             str += "*";
//         } else {
//             str += " ";
//         }
//     }
//     console.log(str);
// }

// * Pattern 10 - Print Diamond Pattern
// let r = 5;
// for(let i = 1; i <= r - 2; i++){
//     let str = "";
//     for(let j = 1; j <= r + i - 1; j++){
//         if(j <= r - i){
//             str += " ";
//         } else {
//             str += "*";
//         }
//     }
//     console.log(str);
// }

// for(let i = r - 1; i >= 1; i--){
//     let str = "";
//     for(let j = 1; j <= r + i - 1; j++){
//         if(j <= r - i){
//             str += " ";
//         } else {
//             str += "*";
//         }
//     }
//     console.log(str);
// }

// * Pattern 11 - Print Hourglass Pattern
// for(let i = rows - 1; i >= 0; i--){
//     let str = "";
//     for(let j = 1; j <= rows + i; j++){
//         if(j < rows - i){
//             str += "  ";
//         } else {
//             str += "* ";
//         }
//     }
//     console.log(str);
// }

// for(let i = 1; i < rows; i++){
//     let str = "";
//     for(let j = 1; j <= rows + i; j++){
//         if(j < rows - i){
//             str += "  ";
//         } else {
//             str += "* ";
//         }
//     }
//     console.log(str);
// }

// * Pattern 12 - Print Hollow Diamond Pattern - 
// for(let i = 1; i <= rows - 2; i++){
//     let str = "";
//     for(let j = 1; j < rows + i; j++){
//         if(j == rows + i - 1 || j == rows - i + 1){
//             str += "*";
//         } else {
//             str += " "
//         }
//     }
//     console.log(str)
// }

// for(let i = rows - 3; i >= 1; i--){
//     let str = "";
//     for(let j = 1; j <= rows + i; j++){
//         if(j == rows + i - 1|| j == rows - i + 1){
//             str += "*";
//         } else {
//             str += " "
//         }
//     }
//     console.log(str)
// }

// * Pattern 13 - Print Rhombus Pattern
// for(let i = 1; i <= rows; i++){
//     let str = "";
//     for(let j = 1; j <= rows * 2 - i; j++){
//         if(j <= rows - i){
//             str += " ";
//         } else {
//             str += "*";
//         }
//     }
//     console.log(str);
// }

// * Pattern 14 - Print Multiplication Table (Single and Upto N)
let n = 5;

// ? Part A - 
// for(let i = 1; i <= 10; i++){
//     console.log(`${n} X ${i} = ${n * i}`);
// }

// ? Part B -
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= 10; j++){
//         console.log(`${i} X ${j} = ${i * j}`);
//     }
//     console.log();
// }
