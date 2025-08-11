const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter number: ", (num) => {
    num = Math.abs(parseInt(num));
    let count = 0;
    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }
    console.log("Digits =", count);
    rl.close();
});
