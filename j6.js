const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter number: ", (num) => {
    num = parseInt(num);
    let rev = 0;
    while (num > 0) {
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);
    }
    console.log("Reversed =", rev);
    rl.close();
});
