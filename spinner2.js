////Refactoring the spinner1.js code to have lesser no of steps that are not repetetive.


const symbols = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
const delay = 200; // delay between each symbol in milliseconds

symbols.forEach((symbol, index) => {
  setTimeout(() => {
    process.stdout.write(`\r${symbol}   `);
  }, delay * index);
});