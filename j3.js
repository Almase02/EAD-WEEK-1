const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter n: ", (n) => {
    n = parseInt(n);
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += i;
    console.log("Sum =", sum);
    rl.close();
});
