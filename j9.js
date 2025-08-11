const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter string: ", (str) => {
    let rev = "";
    for (let ch of str) rev = ch + rev;
    console.log("Reversed string =", rev);
    rl.close();
});
