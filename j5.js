const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter number: ", (num) => {
    num = parseInt(num);
    let fact = 1;
    for (let i = 1; i <= num; i++) fact *= i;
    console.log("Factorial =", fact);
    rl.close();
});
