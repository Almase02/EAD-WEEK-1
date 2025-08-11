const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter number: ", (num) => {
    num = parseInt(num);
    let isPrime = num > 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime ? "Prime" : "Not Prime");
    rl.close();
});
