// ? Q1. 
    let num1 = 10;
    const printNDiv = document.querySelector(".printNResult");
    for(let i = 1; i <= num1; i++){
        printNDiv.textContent += `${i} `;
    }

// ? Q2. 
    let num2 = 20;
    const printNReverse = document.querySelector(".printNReverse");
    for(let i = 1; i <= num2; i++){
        printNReverse.textContent += `${num2 + 1 - i} `;
    }

// ? Q3. 
    let num3 = 30;
    const printEven = document.querySelector(".printEven");
    for(let i = 1; i <= num3; i++){
        if(i % 2 == 0){
            printEven.textContent += `${i} `;
        }
    }

// ? Q4. 
// * using loop - brute force
    let num4 = 10;
    const printNSum = document.querySelector(".printNSum");

    // if(num4 > 0){
    //     let sum = 0;
    //     for(let i = 1; i <= num4; i++){
    //         sum += i
    //     }
    //     printNSum.textContent = sum;
    // }
    // else {
    //     printNSum.textContent = "Not a valid natural number"
    // }

//* Optimized version using formula -
    // if(num4 > 0 && Number.isInteger(num4)){
    //     let sum = (num4 * (num4 + 1)) / 2;
    //     printNSum.textContent = sum;
    // }

//* Using array.from and reduce - 
    // let sum = Array.from({length: num4}, (_, i) => i + 1).reduce((a, b) => a + b ,0 );
    // printNSum.textContent = sum;

// * Using Array and .keys() method -
    // let sum = [...Array(num4 + 1).keys()].slice(1).reduce((a, b) => a + b, 0);
    // printNSum.textContent = sum;

// * eval method - risky 
    // let sum = eval([...Array(num4 + 1).keys()].slice(1).join("+"));
    // printNSum.textContent = sum;

// ? Q5. 
    let num5 = 5;
    let fact = 1;
    const printFact = document.querySelector(".printFact");

    // * 1
    // if(num5 != 0){
    //     fact = Array.from({length: num5}, (_, i) => i + 1).reduce((a, b) => a * b, 1);
    //     console.log(fact)
    // }

    // * 2
    // for(let i = 1; i <= num5; i++){
    //     fact = fact * i;
    // }
    // printFact.textContent = fact;

// ? Q6. 

    let num6 = 30;
    const printSumEven = document.querySelector(".printSumEven");
    // let sum2 = Array.from({length: num6}, (_, i) => i + 1).filter((a) => a % 2 == 0).reduce((a, b) => a + b);
    
    // * 2
    // let sum2 = 0;
    // for(let i = 1; i <= num6; i++){
    //     if(i % 2 === 0){
    //         sum2 += i
    //     }
    // }

    // * 3
    // let n = num6 / 2;
    // let sum2 = n * (n + 1);
    // printSumEven.textContent = sum2;
    
// ? Q7. 
// console.time();

    let num7 = 10;
    const printSquare = document.querySelector(".printSquare");

    // * 1.
    for(let i = 1; i <= num7; i++){
        printSquare.textContent += `${Math.pow(i, 2)} `;
        // printSquare.textContent += `${i ** 2} `;
    }
    
    // * 2.
    // let squared = Array.from({length: num7}, (_, i) => i + 1).map((num) => num ** 2);
    // printSquare.textContent = [...squared].join(" ");

// console.timeEnd();

// ? Homework -
// ? Q1
    let num8 = 60;
    const nDivisble = document.querySelector(".nDivisible");
    for(let i = 1; i <= num8; i++){
        if(i % 3 == 0 && i % 5 == 0){
            nDivisble.textContent += `${i} `;
        }
    }
    
// ? Q2 
    let num9 = 5;
    const nOddSum = document.querySelector(".nOddSum");
    let firstOdd = Math.pow(num9, 2);
    nOddSum.textContent = firstOdd;

// ? Q3 
    let num10 = 5;
    const nCube = document.querySelector(".nCube");
    for(let i = 1; i <= num10; i++){
        nCube.textContent += `${Math.pow(i, 3)} `;
    }

// ? Q4 
    let num11 = 20;
    for(let i = 2; i <= num11; i++){
        let square = Math.pow(i, 2)
        if((i % 2 == 0 ) && (square < num11)){
            console.log(square);
        }
    }
