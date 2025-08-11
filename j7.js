const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter terms: ", (n) => {
    n = parseInt(n);
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a);
        [a, b] = [b, a + b];
    }
    rl.close();
});
